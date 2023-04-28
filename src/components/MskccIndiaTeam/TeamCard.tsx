type DoctorInfo = {
    drName: string,
    img: string,
    designation?: string
}

function TeamCard({ drName, img, designation }: DoctorInfo) {
    return (
        <>
            <div className="shadow col-span-3 md:col-span-1 lg:col-span-1 max-w-sm w-full bg-white  rounded-lg shadow-card">
                <img className="rounded-t-lg w-full" src={img} alt={drName} title={drName} />
                <div className="p-5 text-center mt-2">
                    <h3 className=" text-lg hover:text-secondary transition-colors duration-500 text-darkblue">{drName}</h3>
                    <p className="mb-3 font-poppins !font-semibold font-sans text-lg text-darkblue uppercase">{designation}</p>
                </div>
            </div>
        </>
    )
}

export default TeamCard