import React from "react";
import type { DoctorInfo } from "constants/HomeConstants";

type DocInfo = {
  doctorInfo: DoctorInfo;
};

const DoctorInfo = ({ doctorInfo }: DocInfo) => {
  return (
    <div>
      {doctorInfo.residency.lable.length === 0 ? (
        ""
      ) : (
        <div className="uppercase tracking-widest font-medium text-md pb-4">
          {doctorInfo.residency.lable}
        </div>
      )}

      {doctorInfo.residency.values.map((data) =>
        data.length === 0 ? (
          ""
        ) : (
          <div className="p-3 w-11/12 list-disc">
            <ul className="list-inside list-image-[url(/src/assets/img/tick.svg)]">
              <li className="">{data.length === 0 ? "" : data}</li>
            </ul>
          </div>
        )
      )}

      {doctorInfo.fellowships.lable.length === 0 ? (
        ""
      ) : (
        <div className="uppercase tracking-widest font-medium text-md pt-4 pb-4">
          {doctorInfo.fellowships.lable}
        </div>
      )}

      {doctorInfo.fellowships.values.map((data) =>
        data.length === 0 ? (
          ""
        ) : (
          <div className="p-3 w-11/12 list-disc">
            <ul className="list-inside  list-image-[url(/src/assets/img/tick.svg)]">
              <li className="">{data.length === 0 ? "" : data}</li>
            </ul>
          </div>
        )
      )}

      {doctorInfo.boardOfCertification.lable.length === 0 ? (
        ""
      ) : (
        <div className="uppercase tracking-widest font-medium text-md pt-4 pb-4">
          {doctorInfo.boardOfCertification.lable}
        </div>
      )}

      {doctorInfo.boardOfCertification.values.map((data) =>
        data.length === 0 ? (
          ""
        ) : (
          <div className="p-3 w-11/12 list-disc">
            <ul className="list-inside list-image-[url(/src/assets/img/tick.svg)]">
              <li className="">{data.length === 0 ? "" : data}</li>
            </ul>
          </div>
        )
      )}

      {doctorInfo.areaOfExpertise.lable.length === 0 ? (
        ""
      ) : (
        <div className="uppercase tracking-widest font-medium text-md pt-4 pb-4">
          {doctorInfo.areaOfExpertise.lable}
        </div>
      )}

      {doctorInfo.areaOfExpertise.values.map((data) =>
        data.length === 0 ? (
          ""
        ) : (
          <div className="p-3 w-11/12 list-disc">
            <ul className="list-inside list-image-[url(/src/assets/img/tick.svg)]">
              <li className="">{data.length === 0 ? "" : data}</li>
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default DoctorInfo;
