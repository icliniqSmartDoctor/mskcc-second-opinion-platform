import AssetAccessor from 'utils/AssetAccessor';
import * as CONSTANTS from '../../constants'

function Footer() {
    return (
        <>
            <div className='bg-primary h-auto relative mt-10 w-full'>
                <div className='container-alternate mx-auto '>
                    <div className="grid grid-cols-2 gap-4 py-24">
                        <div className='col-span-2 lg:col-span-1'>
                            <div className='flex items-center justify-between'>
                                <img className='h-12' src={AssetAccessor.msk_logo_white} />
                                <img className='h-9' src={AssetAccessor.ic_blue_logo} />
                            </div>
                            <div className='mt-10 text-gray-400 leading-24'>Our experts treat every form of cancer, including the most important one—yours. MSK is able to provide guidance and care for patients in India through our collaboration with iCliniq, a leading global telemedicine provider. Our India-based team of dedicated clinical specialists and care coordinators will help you, your family, or representative access MSK’s doctors in New York.</div>

                            <div className='text-md flex items-center tracking-wide	 mt-8 font-semibold	'>
                                <i className='fa fa-envelope text-white pr-2 -mt-1 text-xl'></i>
                                <p className='text-white'>Email: </p>
                                <a className="pl-2 text-secondary" href="mailto:mskccindia@icliniq.com">mskccindia@icliniq.com</a>
                            </div>
                            <div className='text-md flex items-center tracking-wide	 mt-3 font-semibold	'>
                                <i className='fa fa-phone text-white pr-2  text-xl'></i>
                                <p className='text-white'>Phone Number: </p>
                                <a className="pl-2 text-secondary" href="tel:+918270070000">+91 82 700 70000</a>
                            </div>

                        </div>

                        <div className='col-span-2 mt-10 lg:mt-0 lg:col-span-1 lg:ml-12'>
                            <span className='text-white text-2xl font-semibold'>Specialities</span>

                            <div className="grid grid-cols-2 gap-2 ml-4 md:ml-0 md:gap-10">
                                {
                                    CONSTANTS.SPECIALITIES.map((res, i) => {
                                        return <div className='col-span-2 md:col-span-1'>
                                            {Object.keys(res).map(data =>
                                                <div className='mt-5 w-auto break-words '><a className='text-gray-400 capitalize hover:text-gray-200' href={res[data]}>{data}</a></div>
                                            )}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-secondary h-16 flex items-center justify-center'>
                    <span className='text-gray-800'>Powered by iCliniq</span>
                </div>
            </div>
        </>
    )
}

export default Footer;