import React from 'react'

type DoctorInfo = {
    doctorInfo: {
        drName: string,
        specialist: string,
        doctorPage: string,
        drImg: string
    }
}

function MskDoctors({ doctorInfo }: DoctorInfo) {
    return (
        <>
            <div className="col-span-3 md:col-span-1 lg:col-span-1 max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={`${doctorInfo.doctorPage}`}>
                    <img className="rounded-t-lg w-full" src={doctorInfo.drImg} alt={doctorInfo.drName} title={doctorInfo.drName} />
                </a>
                <div className="p-5 text-center mt-2">
                    <a href={`${doctorInfo.doctorPage}`}>
                        <h5 className="mb-2 text-2xl font-bold hover:text-secondary transition-colors duration-500   text-gray-700 dark:text-white">{doctorInfo.drName}</h5>
                    </a>
                    <p className="mb-3  tracking-[.14rem] mt-2.5 font-medium text-sm	 uppercase">{doctorInfo.specialist}</p>

                </div>
            </div>

        </>
    )
}

export default MskDoctors