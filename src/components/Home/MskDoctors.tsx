import React from 'react'
import * as CONSTANTS from '../../constants';

function MskDoctors() {
    return (
        <>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
                {CONSTANTS.MSK_DOCTORS.map(res => {
                    return <div className="col-span-3 md:col-span-1 lg:col-span-1 max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href={`${res.doctorPage}`}>
                            <img className="rounded-t-lg w-full" src={res['drImg']} alt="" />
                        </a>
                        <div className="p-5 text-center mt-2">
                            <a href={`${res.doctorPage}`}>
                                <h5 className="mb-2 text-2xl font-bold hover:text-secondary transition-colors duration-500   text-gray-700 dark:text-white">{res['drName']}</h5>
                            </a>
                            <p className="mb-3  tracking-[.14rem] mt-2.5 font-medium text-sm	 uppercase">{res['specialist']}</p>

                        </div>
                    </div>
                }
                )}


            </div>

        </>
    )
}

export default MskDoctors