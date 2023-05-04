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
                                <a href='https://www.mskcc.org/'><img className='h-16' title="MSK Logo" alt="MSK Logo" src="https://assets.icliniq.com/mskcc/logo/msk-logo-white.svg"/></a>
                                <a href='https://www.icliniq.com/'><img className='h-10' title="iCliniq Logo" alt="iCliniq Logo" src="https://assets.icliniq.com/v2/assets/images/iCliniq-logo/ic-blue-logo.svg" /></a>
                            </div>
                            <div className='mt-10 text-white leading-24'>Our experts treat every form of cancer, including the most important one—yours. MSK is able to provide guidance and care for patients in India through our collaboration with iCliniq, a leading global telemedicine provider. Our India-based team of dedicated clinical specialists and care coordinators will help you, your family, or representative access MSK’s doctors in New York.</div>

                            <div className='text-md flex items-center tracking-wide	 mt-8 font-normal	'>
                                <span className="material-icons-outlined text-white pr-2 -mt-1 text-3xl">mail</span>
                                <p className='text-white'>Email: </p>
                                <a className="pl-2 text-white underline" href="mailto:mskccindia@icliniq.com">mskccindia@icliniq.com</a>
                            </div>
                            <div className='text-md flex items-center tracking-wide	 mt-3 font-normal	'>
                                <span className="material-icons-outlined text-white pr-2 -mt-1 text-3xl">call</span>
                                <p className='text-white'>Phone Number: </p>
                                <a className="pl-2 text-white underline" href="tel:+918270070000">+91 82 700 70000</a>
                            </div>

                        </div>

                        <div className='col-span-2 mt-10 lg:mt-0 lg:col-span-1'>
                            <h3 className='text-white text-2xl font-semibold'>Specialities</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-10'>
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
                <a  href="https://api.whatsapp.com/send?phone=918270070000" target="_blank">
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