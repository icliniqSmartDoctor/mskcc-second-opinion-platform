export type ImageCode = {
  imageUrl: String;
};

const ScanCode: React.FC<ImageCode> = ({ imageUrl }) => {
  return (
    <>
      <div className="w-80  bg-white  border-2 border-gray-300 rounded-lg">
        <div className="flex justify-center text-gray-700 text-lg font-medium p-4">
          Watsapp Opt-in
        </div>
        <hr className="w-full border border-l-slate-600" />
        <div className="flex justify-center p-11 ">
          <img
            src={`${imageUrl}`}
            alt="My Image"
            className="w-32 h-32 border border-gray-300 "
          />
        </div>
        <div className="p-11 pt-7 text-center text-xl">
          Scan the QR code to <br />
          opt-in for WhatsApp <br />
          updates regarding your <br />
          case and MSK India.
        </div>
      </div>
    </>
  );
};
export default ScanCode;
