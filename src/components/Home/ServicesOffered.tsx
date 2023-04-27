import React from 'react'

function ServicesOffered() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700 h-full relative">
            <div className='p-10 pb-20'>
                <a href='mskcc-india-services/remote-second-opinion'>
                    <img className="rounded-t-lg w-full" src='https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/mskcc-remote.png' alt="" />
                </a>
                <div className="pt-5 text-center mt-2">
                    <a href='mskcc-india-services/remote-second-opinion'>
                        <h5 className="mb-2 text-2xl font-semibold hover:text-secondary transition-colors duration-500   text-gray-700 dark:text-white">Remote Second Opinions from MSK Oncologists</h5>
                    </a>
                    <p className="my-3 text-md">Comprehensive and customized remote second opinion package, depending on your cancer diagnosis and care needs</p>
                </div>
            </div>
            <div className='absolute w-full bottom-0 '>
                <a type="button" className=" bg-blue-100 hover:bg-primary hover:text-white transition-colors duration-300	 font-medium  text-md px-5 py-4 w-full  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center" href='mskcc-india-services/remote-second-opinion'>Read More</a>
            </div>
        </div>
        <div className="w-full bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700 h-full relative">
            <div className='p-10 pb-20'>
                <a href='mskcc-india-services/travel-guide-to-mskcc-new-york'>
                    <img className="rounded-t-lg w-full" src='https://assets.icliniq.com/v2/assets/images/mskcc/img/mskcc-cancer/mskcc-travel.png' alt="" />
                </a>
                <div className="pt-5 text-center mt-2">
                    <a href='mskcc-india-services/travel-guide-to-mskcc-new-york'>
                        <h5 className="mb-2 text-2xl font-semibold hover:text-secondary transition-colors duration-500   text-gray-700 dark:text-white">Care at MSK in New York</h5>
                    </a>
                    <p className="my-3 text-md">For patients interested in receiving care at MSK's main campus in New York City, and for whom on-site care is clinically advisable as determined by MSK physicians</p>

                </div>
            </div>
            <div className='absolute w-full bottom-0 '>
                <a type="button" className=" bg-blue-100 hover:bg-primary hover:text-white transition-colors duration-300	 font-medium  text-md px-5 py-4 w-full  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center" href='mskcc-india-services/travel-guide-to-mskcc-new-york'>Read More</a>
            </div>
        </div>
    </div>
  )
}

export default ServicesOffered