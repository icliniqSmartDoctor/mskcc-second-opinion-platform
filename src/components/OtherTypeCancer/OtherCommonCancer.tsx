import { OTHER_CANCER_SPECIALTIES } from 'constants/HomeConstants'

function OtherCommonCancer() {
  return (
    <>
      {OTHER_CANCER_SPECIALTIES.map((specialites) => (
        <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3">
            <div className='service-box text-center mb-30'>
              <div className="service-thumb">
                <img className='mx-auto pb-11' src={specialites.imgUrl} alt={specialites.label} title={specialites.label}/>
              </div>
              <h3 className='text-2xl font-semibold mb-5'>
                <p>{specialites.label}</p>
              </h3>
              <p className="mb-4">{specialites.description}</p>
            </div>
        </div>
      ))}
    </>
  )
}

export default OtherCommonCancer