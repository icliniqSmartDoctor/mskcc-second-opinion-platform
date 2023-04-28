
type doctor_info = {
  doctorName: string;
  speciality: string;
  designation: string;
  image: string;
  education:string;
};

const DoctorCard = (props: doctor_info) => {
  return (
    <div className="bg-white pb-20">
      <div className="border-t-4 border-t-blue-500 w-full">
        <div className="p-7 pt-10 shadow-lg mb-10">
          <div className=" team-box-2 team-box-3 text-center mb-30">
            <div className="pl-4  ">
              <img
                src="https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/doctor-details-370-3.jpg"
                alt={`${props.doctorName}`}
                title={`${props.doctorName}`}
              />
            </div>
            <div className="font-sans mt-35 mb-35  text-sm pt-5">
              <h3 className="text-4xl font-semibold pb-4">{props.doctorName}</h3>
              <h6 className="font-medium uppercase tracking-widest text-primary pb-2">
                {props.speciality}
              </h6>
              <h6 className="font-semibold text-center w-96 pb-10">{props.designation}</h6>
            </div>
          </div>
        </div>
        <div className="p-10 pt-6 pb-16 border-t-4 border-t-blue-500 shadow-lg mb-50">
        <div className=" mb-30">
          <h3 className=" text-3xl pl-3 p-2 font-semibold">Education</h3>
        </div>

      
        <div className="">
          <ul>
            <li>
              <span>
                <div className="p-4 pt-10 font-medium text-xl">
                  {props.education}
                </div>
              </span>
            </li>
          </ul>
        </div>
        <hr className="border"/>
      </div>
      </div>
    </div>
  );
};
export default DoctorCard;