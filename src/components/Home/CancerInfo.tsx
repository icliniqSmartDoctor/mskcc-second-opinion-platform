import type { ReactNode } from "react";
import type {
  CancerInfoType,
  CancerSubItemType,
} from "constants/HomeConstants";

type CancerType = {
  info: CancerInfoType[];
};

function bodyFormatter(body: string | (string | string[])[]): ReactNode {
  return (
    <>
      {Array.isArray(body) ? (
        <>
          {body.map((data) => {
            return (
              <>
                {Array.isArray(data) ? (
                  <ul className="list-disc mx-10 mt-3 leading-7 text-gray-700">
                    {data.map((innerList) => {
                      return <li>{innerList}</li>;
                    })}
                  </ul>
                ) : (
                  <p className="mt-4">{data}</p>
                )}
              </>
            );
          })}
        </>
      ) : (
        <p className="">{body}</p>
      )}
    </>
  );
}

function subItemFormatter(subItems: string[] | CancerSubItemType[]): ReactNode {
  if (!subItems) {
    return null;
  }

  return subItems.map((subItem, index) => {
    if (typeof subItem === "string") {
      return (
        <div>
          <ul className="list-disc">
            <li key={index}>{subItem}</li>
          </ul>
        </div>
      );
    }

    return (
      <div key={index}>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-medium ">{subItem.heading}</span> 
            {subItem.body && <span>-{subItem.body}</span>}
            <div className="pl-10 pt-3 pb-3">
              {subItemFormatter(subItem.subItems!)}
            </div>
          </li>
        </ul>
      </div>
    );
  });
}

const CancerInfo = ({ info }: CancerType) => {
  return (
    <div>
      <div>
        {info.map((res) => {
          return (
            <>
              {res.infoTitle && (
                <h1 className="text-4xl font-semibold font-poppins tracking-wider pt-5">
                  {res.infoTitle}
                </h1>
              )}
              <div className="mt-6 font-semibold text-xl font-poppins tracking-wider pt-5">
                {res.heading}
              </div>
              <div className="mb-5 mt-2">
                <img
                  src="https://assets.icliniq.com/v2/assets/images/mskcc/img/shape/section-title-line-v1.png"
                  alt="Title line"
                  title="Title line"
                />
              </div>
              {res.body && (
                <div>
                  {bodyFormatter(res.body)}{" "}
                  <span>
                    {res.link && (
                      <a
                        className="hover:text-secondary"
                        href={`${res.linkPath}`}
                      >
                        {res.link}
                      </a>
                    )}
                  </span>{" "}
                </div>
              )}
              {res.subItems && (
                <div className="pt-5">{subItemFormatter(res.subItems)}{res.bodyTwo &&(<div>{res.bodyTwo}</div>)}</div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CancerInfo;
