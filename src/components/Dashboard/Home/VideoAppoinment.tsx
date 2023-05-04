import type React from "react";

interface Props {
  numDays: number;
  date: string;
  time: string;
}

const VideoAppointment: React.FC<Props> = ({ numDays, date, time }) => {
  return (
    <div className="w-96 bg-white border-2 border-gray-200 rounded-xl pb-2 ">
      <div className="flex justify-center p-5 font-medium text-gray-700 text-lg">
        Video Appointment
      </div>
      <hr className="border border-l-slate-600" />
      <div className="flex justify-between p-8">
        <div className="w-28 h-20 border-2 rounded-3xl border-sky-100 p-2">
          <svg
            className="w-32 h-12 mt-2 pr-8"
            width="59"
            height="43"
            viewBox="0 0 59 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.0089 5.08574L43.1936 11.9703V8.34361C43.1936 4.13296 39.8463 0.72142 35.6773 0.72142H8.01626C3.84732 0.72142 0.5 4.13296 0.5 8.34361V34.13C0.5 38.3099 3.84732 41.7214 8.01626 41.7214H35.6773C39.8463 41.7214 43.1936 38.3099 43.1936 34.13V30.4725L57.0089 37.3571C57.6784 37.6952 58.5 37.1727 58.5 36.4043V6.03851C58.5 5.27015 57.6784 4.74766 57.0089 5.08574Z"
              fill="#C3DDFD"
              stroke="#C3DDFD"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="pl-4 pt-5 text-lg font-medium text-gray-600 inline-block whitespace-nowrap">
          in {numDays} days
        </div>
      </div>
      <div className="pb-2 pl-12 pr-16 mb-4 flex justify-between">
        <div className="text-gray-500 ">
          Date
          <div className="text-black pt-2">{date}</div>
        </div>
        <div className="text-gray-500">
          Time
          <div className="text-black pt-2">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoAppointment;
