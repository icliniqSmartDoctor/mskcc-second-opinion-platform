import { CANCER_SPECIALTIES } from '../../GlobalConstants'

function CancerSpecialties() {
    return (
        <>
        {CANCER_SPECIALTIES.map((specialites) => (
            <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3">
                <div className='service-box mb-30'>
                    <h3 className='text-2xl font-semibold mb-5'>
                        <a href={specialites.cancer_path_url}>{specialites.cancer_label}</a>
                    </h3>
                    <p className="mb-4">{specialites.cancer_description}</p>
                    <a className='block h5 font-semibold text-center' href={specialites.cancer_path_url}>Read More</a>
                </div>
            </div>
        ))}
        </>
    )
}

export default CancerSpecialties