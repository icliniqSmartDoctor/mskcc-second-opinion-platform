import React from "react";

type DoctorInfoProps = {
  doctorInfo: {
    [key: string]: string[];
  }[];
};

const DoctorInfo = ({ doctorInfo }: DoctorInfoProps) => {
  return (
    <div>
      {doctorInfo.map((obj, idx) => (
        <>
          <div key={idx}>
            {Object.entries(obj).map(([key, value]) => (
              <>
                <div key={key}>
                  <div className="uppercase tracking-widest font-semibold text-md ">
                    {key}
                  </div>
                  <ul className="p-5 pb-10">
                    {value.map((val, idx) => (
                      <div className="flex">
                        <div className="pb-4">
                          <li key={idx}>
                            <i className="fa fa-check" style={{ color: 'blue' }}/> {val}
                          </li>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default DoctorInfo;


