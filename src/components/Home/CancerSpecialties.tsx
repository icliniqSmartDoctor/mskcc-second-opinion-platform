import { CANCER_SPECIALTIES } from '../../constants'

function CancerSpecialties() {
    return (
        <>
            <div id="cancer-specialities" className='gray-bg pt-24 pb-28'>
                <div className='container-alternate mx-auto px-4'>
                    <p className="h5 text-center text-xl font-semibold">Cancer Specialties </p>
                    <h2 className="text-center text-4xl font-semibold mb-5">Exceptional Patient Care and Cancer Expertise</h2>
                    <div className="mb-20 text-center">
                        <img  className='mx-auto' src="https://assets.icliniq.com/v2/assets/images/mskcc/img/shape/section-title-line-v1.png" alt="Title line" title="Title line"/>
                    </div>
                    <div className="grid grid-cols-3 gap-8 items-center">
                        {CANCER_SPECIALTIES.map((specialty) => (
                            <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3">
                                <div className='service-box mb-30'>
                                    <h3 className='text-2xl font-semibold mb-5'>
                                        <a href={specialty.cancer_path_url}>{specialty.cancer_label}</a>
                                    </h3>
                                    <p className="mb-4">{specialty.cancer_description}</p>
                                    <a className='block h5 font-semibold text-center' href={specialty.cancer_path_url}>Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='block text-center mt-8'>
                        <a id="view-other-type-cancer" href="https://mskcc.icliniq.com/cancer-care/types/other-common-types-of-cancer" className="inline-block btn btn-icon ml-0 font-medium"><span>+</span>View Other Types Of Cancers</a>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default CancerSpecialties