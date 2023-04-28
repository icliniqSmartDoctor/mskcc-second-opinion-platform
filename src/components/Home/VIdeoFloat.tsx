import { useEffect, useRef } from 'react';

const VideoFloat = () => {
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoWrap:HTMLDivElement | null = videoWrapRef.current;
    const video:HTMLDivElement | null = videoRef.current;

    const handleScroll = () => {
      const windowScrollTop = window.pageYOffset;
      if(videoWrap){
        const videoBottom = videoWrap!.offsetTop + videoWrap.offsetHeight;

        if (windowScrollTop > videoBottom) {
          videoWrap.style.height = '0';
          video?.classList.add('stuck');
        } else {
          videoWrap.style.height = 'auto';
          video?.classList.remove('stuck');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleVideoClose = () => {
    const videoWrap = videoWrapRef.current;

    if (videoWrap) {
      videoWrap.style.display = 'none';
    }
  };
  return (
    <div className="video-wrap" ref={videoWrapRef}>
		<div className="video-floating" ref={videoRef}>
			<div className='relative w-full'>
				<i className="icon-close-video far fa-window-close" onClick={handleVideoClose}></i>
				<video className="w-full cursor-pointer" id='video-player' poster="https://assets.icliniq.com/mskcc-india/mskcc-india-front-pause.png"  preload='metadata' controls>
					<source src="https://s3.amazonaws.com/images.icliniq.com/video/MSK+India+welcome+video_icliniq+site+and+phone.mp4" type="video/mp4"/>
				</video>
			</div>
		</div>
	</div>
  );
};

export default VideoFloat;