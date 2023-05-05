type doctor_info = {
  doctorName: string;
  speciality: string;
  designation: string;
  image: string;
  education: string[];
};

const DoctorCard = (props: doctor_info) => {
  return (
    <div className="bg-white pb-5 lg:pb-20 md:pb-20">
      <div className="border-t-4 border-t-blue-500 w-full">
        <div className="p-7 pt-10 shadow-lg mb-10">
          <div className=" bg-white text-center mb-30">
            <div className="pl-5 pr-5">
              <img
                src={`${props.image}`}
                alt={`${props.doctorName}`}
                title={`${props.doctorName}`}
              />
            </div>
            <div className="font-sans mt-35 mb-35  text-sm pt-5">
              <h3 className="text-base lg:text-3xl font-semibold pb-4">
                {props.doctorName}
              </h3>
              <h6 className="font-medium uppercase tracking-widest text-primary pb-2">
                {props.speciality}
              </h6>
              <h6 className="font-semibold text-center pb-10">
                {props.designation}
              </h6>
            </div>
          </div>
        </div>
        <div className="p-10 pt-6 pb-16 border-t-4 border-t-blue-500 shadow-lg mb-50">
          <div className=" mb-30">
            <h3 className=" lg:text-3xl pl-3 p-2 font-semibold">Education</h3>
          </div>

          <div className="">
            <ul>
              <li>
                {props.education.map((data) => (
                  <>
                    <span>
                      <div className="p-4 pt-10 font-medium lg:text-xl">
                        {data}
                      </div>
                    </span>
                    <hr className="border" />
                  </>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorCard;
