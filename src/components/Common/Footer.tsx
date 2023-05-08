import { CANCER_SPECIALTIES } from 'constants/HomeConstants'
import AssetAccessor from 'utils/AssetAccessor';

function Footer() {
    const sortedSpecialities = CANCER_SPECIALTIES.sort((a, b) => a.cancer_label.localeCompare(b.cancer_label));
    const middleIndex = Math.ceil(sortedSpecialities.length / 2);
    const firstSpecialities = sortedSpecialities.slice(0, middleIndex);
    const secondSpecialities = sortedSpecialities.slice(middleIndex);

    return (
        <>
            <div className='bg-primary h-auto relative mt-10 w-full'>
                <div className='container-alternate mx-auto '>
                    <div className="grid grid-cols-2 gap-6 py-24">
                        <div className='col-span-2 lg:col-span-1'>
                            <div className='flex items-center justify-between'>
                                <a href='https://www.mskcc.org/'><img className='w-72 h-16' width="1165" height="246" title="MSK Logo" alt="MSK Logo" src="https://assets.icliniq.com/mskcc/logo/msk-logo-white.svg" /></a>
                                <a href='https://www.icliniq.com/'><img className='w-28	h-10' title="iCliniq Logo" alt="iCliniq Logo" src="https://assets.icliniq.com/v2/assets/images/iCliniq-logo/ic-blue-logo.svg" /></a>
                            </div>
                            <div className='mt-10 text-white leading-24'>Our experts treat every form of cancer, including the most important one—yours. MSK is able to provide guidance and care for patients in India through our collaboration with iCliniq, a leading global telemedicine provider. Our India-based team of dedicated clinical specialists and care coordinators will help you, your family, or representative access MSK’s doctors in New York.</div>

                            <div className='text-md flex items-center tracking-wide	 mt-8 font-normal	'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' fill="#fff" height="30" viewBox="0 96 960 960" width="30"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" /></svg>
                                <p className='text-white'>Email: </p>
                                <a className="pl-2 text-white underline" href="mailto:mskccindia@icliniq.com">mskccindia@icliniq.com</a>
                            </div>
                            <div className='text-md flex items-center tracking-wide	 mt-3 font-normal	'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' fill="#fff" height="30" viewBox="0 96 960 960" width="30"><path d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z" /></svg>
                                <p className='text-white'>Phone Number: </p>
                                <a className="pl-2 text-white underline" href="tel:+918270070000">+91 82 700 70000</a>
                            </div>

                        </div>

                        <div className='col-span-2 mt-10 lg:mt-0 lg:col-span-1'>
                            <h3 className='text-white text-2xl font-semibold'>Specialities</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 ml-10 md:ml:0 lg:justify-items-center  lg:grid-cols-2  md:ml:0  gap-10'>
                                <div className='col-span-1 md:col-span-1 lg:col-span-1'>
                                    {firstSpecialities.map((specialites) => (
                                        <div className="mt-5 w-auto break-words ">
                                            <a className="text-white capitalize hover:text-gray-200" href={specialites.cancer_path_url}>{specialites.cancer_label}</a>
                                        </div>
                                    ))}
                                </div>
                                <div className='col-span-1 md:col-span-1 lg:col-span-1'>
                                    {secondSpecialities.map((specialites) => (
                                        <div className="mt-5 w-auto break-words ">
                                            <a className="text-white capitalize hover:text-gray-200" href={specialites.cancer_path_url}>{specialites.cancer_label}</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://api.whatsapp.com/send?phone=918270070000" target="_blank">
                    <img className='fixed banner-whatsapp-icon' src={AssetAccessor.whatsappIcon} alt="Whatsapp Icon" title="Whatsapp Icon" />
                </a>
                <a href="tel:+91-82-700-70000">
                    <img className='fixed banner-call-icon' src={AssetAccessor.telephoneIcon} alt="Telephone Icon" title="Telephone Icon" />
                </a>
                <div className='footer-bottom h-16 flex items-center justify-center'>
                    <span>Powered by iCliniq</span>
                </div>
            </div>
        </>
    )
}

export default Footer;