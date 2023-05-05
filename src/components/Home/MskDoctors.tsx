
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
            <div className="col-span-3 md:col-span-1 lg:col-span-1 max-w-sm w-full bg-white  rounded-lg shadow-card">
                <a href={`${doctorInfo.doctorPage}`}>
                    <img width="310" height="310" className="rounded-t-lg w-full" src={doctorInfo.drImg} alt={doctorInfo.drName} title={doctorInfo.drName} />
                </a>
                <div className="p-5 text-center mt-2">
                    <a href={`${doctorInfo.doctorPage}`}>
                        <h3 className="mb-2 text-2xl font-semibold hover:text-secondary transition-colors duration-500 text-darkblue">{doctorInfo.drName}</h3>
                    </a>
                    <p className="mb-3 tracking-[.14rem] mt-2.5 font-medium text-sm text-darkblue uppercase">{doctorInfo.specialist}</p>

                </div>
            </div>

        </>
    )
}

export default MskDoctors