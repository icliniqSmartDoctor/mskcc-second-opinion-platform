// import StatusTimeline from "./StatusTimeline.json";

interface Status  {
  isPassed: boolean;
  milestone: string;
  timestamp: string;
};

const CaseStatus = (props:{ sample: Status[] }) => {
  

  // const {isPassed,milestone,timestamp}=props
  const colorMapper = () => {
    return props.sample.map((status: Status, i: number) => {
      return (
        <li className="mb-10 ml-4" key={i}>
          <div
            className={`absolute w-3 h-3  ${
              status.isPassed ? "bg-green-400" : "bg-gray-300"
            } rounded-full mt-0 -left-1.5 border border-${
              status.isPassed ? "green-400" : "gray-300"
            }`}
          />

          <time className="font-sans leading-none text-gray-400 dark:text-gray-500">
            <div className="pb-2">{status.milestone}</div>
            <div>{status.timestamp}</div>
          </time>
        </li>
      );
    });
  };

  return (
    <div className="flex justify-center align-center font-sans ">
      <div className=" w-96 h-full bg-white  border border-gray-300 rounded-lg">
        <div className="flex justify-center p-5 text-lg text-gray-700 font-medium">Case Status</div>
        <hr className="border border-l-slate-600" />
        <div className="pl-11 p-5">
          <ol className="relative border-l border-gray-300 dark:border-gray-700">
            <div>{colorMapper()}</div>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default CaseStatus;
