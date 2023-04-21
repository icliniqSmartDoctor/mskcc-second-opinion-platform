
function Banner() {
    return (
        <section className="flex items-center slider-height-3 pt-28	">
            <div className='container-alternate mx-auto !px-0'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="2xl:col-span-1 2xl:col-start-2 xl:col-span-1 xl:col-start-2 lg:col-span-1 lg:col-end-1  md:col-span-2 sm:col-span-2 col-span-2  hero-text hero-text-box">
                        <div className="hero-slider-caption ">
                            <h4 className='font-semibold text-xl'>An expert opinion from Memorial Sloan Kettering Cancer Center, just for you</h4>
                            <h5 className="text-lg rubik-font mb-5 banner-text-color">We are here to care for you.</h5>
                            <div className="hero-slider-btn block mt-4 mb-4">
                                <a id="Request-consult" href="https://mskcc.icliniq.com/mskcc-india-services/book-an-appointment-online" className="btn btn-icon ml-0 font-medium"><span>+</span>Request a consult</a>
                            </div>
                            <p className="mb-2">
                                From our center in Chennai, Memorial Sloan Kettering Cancer Center (MSK) now provides people facing cancer across India access to our institution’s world-renowned oncologists, research, clinical trials, and education.
                            </p>
                            <p>
                                In collaboration with iCliniq, a leading provider of telemedicine services, a dedicated team of clinicians and patient care coordinators in Chennai is ready to guide each person on their unique cancer journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner