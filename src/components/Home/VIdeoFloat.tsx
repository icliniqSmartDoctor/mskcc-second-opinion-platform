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
      <svg className='icon-close-video' onClick={handleVideoClose} xmlns="http://www.w3.org/2000/svg" fill='#fff' height="25" viewBox="0 96 960 960" width="25"><path d="m330 768 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42Zm150 208q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/></svg>
				<video className="w-full cursor-pointer" id='video-player' poster="https://assets.icliniq.com/mskcc-india/mskcc-india-front-pause.png"  preload='metadata' controls>
					<source src="https://s3.amazonaws.com/images.icliniq.com/video/MSK+India+welcome+video_icliniq+site+and+phone.mp4" type="video/mp4"/>
				</video>
			</div>
		</div>
	</div>
  );
};

export default VideoFloat;