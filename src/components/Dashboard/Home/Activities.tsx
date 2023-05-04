import type { Activities } from 'GlobalConstants';

const activity = [
  { id: 1, filename: "fa fa-comment", color: "bg-pink-200" },
  { id: 2, filename: "fa fa-dollar", color: "bg-purple-200" },
  { id: 3, filename: "fa fa-upload", color: "bg-blue-200" },
  { id: 4, filename: "fa fa-file", color: "bg-orange-200" },
  { id: 5, filename: "fa fa-address-book", color: "bg-red-200" },
  { id: 6, filename: "fa fa-address-book", color: "bg-green-200" },
];



type Props= {
  Acts: Activities
}

const Activities = ({Acts}:Props) => {
  const mapper = () => {
    return Acts.map((value) => {
      const file = activity.find((val) => val.id === value.id);
      return (
        <>
          <li className="mb-10 ml-6">
            <span
              className={`${file!.filename} absolute flex items-center justify-center w-6 h-6 ${file!.color} rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900`}
            ></span>
            <h3 className="flex items-center mb-1 text-xs font-medium text-gray-800 dark:text-white">
              {value.activity}
            </h3>
            <time className="block mb-2 text-xs font-normal leading-none text-gray-500 dark:text-gray-500">
              {value.timestamp}
            </time>
          </li>
        </>
      );
    });
  };

  return (
    <>
      <div className="flex flex-col pb-5 justify-center align-center font-sans rounded-lg border-2 w-80 bg-white">
        <div className="p-4 text-center font-medium text-gray-700 text-lg">
          Activities
        </div>
        <hr className="border border-l-slate-800" />
        <div className="flex justify-center h-96 overflow-y-scroll ">
          <ol className="relative border-l border-dashed  border-gray-500 dark:border-gray-700 mt-10 h-auto">
            {mapper()}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Activities;
