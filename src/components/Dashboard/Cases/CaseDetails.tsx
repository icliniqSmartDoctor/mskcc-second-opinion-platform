import type { CaseDetailType } from "GlobalConstants";

type RecType = {
  Rec: CaseDetailType[];
};


const CaseDetails = ({ Rec }: RecType) => {

  

  return (
    <div className="pt-3 pb-10">
      {Rec.map((data, index) => (
        <>
          <div className="p-4" key={index}>
            {Object.keys(data.general_info).map((key) => (
              <div key={key}>
                <div className="pt-5 text-gray-500">
                  {data.general_info[key]!.label ?? "-"}
                </div>

                <div> {data.general_info[key]!.value ?? "-"}</div>
              </div>
            ))}
          </div>

          <div className="pt-3 pb-3">
            <div className="text-2xl pb-2">Your Medical Information</div>
            <hr className="border border-gray-300 w-1/2" />
            <div className="">
              <div className="">
                <div className="p-4" key={index}>
                  {Object.keys(data.medical_info).map((key) => (
                    <div key={key}>
                      <div className="pt-5 text-gray-500">
                        {data.medical_info[key]!.query ?? "-"}
                      </div>

                      <div> {data.medical_info[key]!.response ?? "-"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 pb-3">
            <div className="text-2xl pb-2">Patient Services</div>
            <hr className="border border-gray-300 w-1/2" />
            <div className="">
              <div className="">
                <div className="p-4" key={index}>
                  {Object.keys(data.patient_service).map((key) => (
                    <div key={key}>
                      <div className="pt-5 text-gray-500">
                        {data.patient_service[key]!.query ?? "-"}
                      </div>

                      <div> {data.patient_service[key]!.response ?? "-"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 pb-3">
            <div className="text-2xl pb-2">Personal Information</div>
            <hr className="border border-gray-300 w-1/2" />
            <div className="">
              <div className="">
                <div className="p-4" key={index}>
                  {Object.keys(data.personal_info).map((key) => (
                    <div key={key}>
                      <div className="pt-5 text-gray-500">
                        {data.personal_info[key]!.label ?? "-"}
                      </div>

                      <div> {data.personal_info[key]!.value ?? "-"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <hr className="border border-gray-300 w-1/2" />
    </div>
  );
};
 
CaseDetails.propTypes = {};

export default CaseDetails;
