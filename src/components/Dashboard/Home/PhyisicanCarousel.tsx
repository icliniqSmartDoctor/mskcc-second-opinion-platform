import { Carousel } from "flowbite-react";
import { PHYSICIAN_CAROUSEL } from "GlobalConstants";

const PhyisicanCarousel = () => {


  const LeftControl = () => (
    <div id="left" className=" pl-7 pb-28 carousel-control carousel-control-left">
      <div className="hidden">left</div>
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.70703 0.293031C5.8945 0.480558 5.99982 0.734866 5.99982 1.00003C5.99982 1.26519 5.8945 1.5195 5.70703 1.70703L2.41403 5.00003L5.70703 8.29303C5.88919 8.48163 5.98998 8.73423 5.9877 8.99643C5.98543 9.25863 5.88026 9.50944 5.69485 9.69485C5.50944 9.88026 5.25863 9.98543 4.99643 9.9877C4.73423 9.98998 4.48163 9.88919 4.29303 9.70703L0.293031 5.70703C0.10556 5.5195 0.000244141 5.26519 0.000244141 5.00003C0.000244141 4.73487 0.10556 4.48056 0.293031 4.29303L4.29303 0.293031C4.48056 0.10556 4.73487 0.000244141 5.00003 0.000244141C5.26519 0.000244141 5.5195 0.10556 5.70703 0.293031Z"
          fill="#1F2A37"
        />
      </svg>
    </div>
  );

  const RightControl = () => (
    <div id="right" className=" pr-7 pb-28 carousel-control carousel-control-right">
      <div className="hidden">right</div>
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.293031 9.70704C0.10556 9.51951 0.000244141 9.26521 0.000244141 9.00004C0.000244141 8.73488 0.10556 8.48057 0.293031 8.29304L3.58603 5.00004L0.293031 1.70704C0.110873 1.51844 0.0100779 1.26584 0.0123563 1.00364C0.0146347 0.741443 0.119804 0.490631 0.305212 0.305223C0.49062 0.119815 0.741433 0.0146453 1.00363 0.0123669C1.26583 0.0100885 1.51843 0.110883 1.70703 0.293041L5.70703 4.29304C5.8945 4.48057 5.99982 4.73488 5.99982 5.00004C5.99982 5.26521 5.8945 5.51951 5.70703 5.70704L1.70703 9.70704C1.5195 9.89451 1.26519 9.99983 1.00003 9.99983C0.734866 9.99983 0.480558 9.89451 0.293031 9.70704Z"
          fill="#1F2A37"
        />
      </svg>
    </div>
  );

  return (
    <div className={`border-2 rounded-2xl  bg-white h-96 w-96`}>
      <h3 className="text-center w-full pt-5 pb-5 text-lg">
        Assigned MSK Physician(s)
      </h3>
      <hr className="border-gray-200 border" />
      <div className="pb-5 w-full h-full">
        <div className="sm:h-48 xl:h-48 2xl:h-72 pt-7">
          <Carousel
            indicators={false}
            leftControl={<LeftControl />}
            rightControl={<RightControl />}
          >
            {PHYSICIAN_CAROUSEL.map((data) => (
              <>
                <div className="flex justify-center ">
                  <img
                    className="rounded-xl w-32 h-32"
                    src={data.image}
                    alt="..."
                  />
                </div>
                <div className="text-center pt-7">
                  <span className="text-base">{data.name}</span>
                  <div className="pt-5 text-xs">
                    <a href={data.link} className=" text-blue-600 underline">
                      view profile at msk.org
                    </a>
                  </div>
                </div>
              </>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PhyisicanCarousel;
