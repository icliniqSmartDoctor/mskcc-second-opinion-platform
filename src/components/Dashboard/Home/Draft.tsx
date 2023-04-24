import { Button, Card } from 'flowbite-react'


function Draft() {
    return (
        <div className='container mx-auto px-10 pt-32'>
            <div className="grid grid-cols-3 gap-4 pt-6 h-72">
                <div className="col-span-2 ">
                    <Card className='w-2/3	shadow-none !bg-gray-100 border-none h-full'>
                        <p className='text-blue-800 text-lg'>Continue from where you left off</p>

                        <Card className=' p-0 card-with-no-padding '>
                            <div className='flex'>
                                <div className='rounded-l-lg h-44 bg-gray-400 w-12 flex items-center	'>
                                    <span className='origin-center -rotate-90 tracking-widest text-white uppercase'>
                                        Draft
                                    </span>
                                </div>
                                <div className='flex w-full'>
                                    <div className="grid w-full grid-cols-3 items-center  ">
                                        <div className="col-span-2 pl-5">
                                            <div>
                                                <p className='text-sm text-gray-500'>Inquiry form</p>
                                                <p className='text-black text-sm mt-1'>Step 2</p>
                                            </div>
                                            <div className='mt-5'>
                                                <p className='text-sm text-gray-500'>Last edited on</p>
                                                <p className='text-black text-sm mt-1'>02-21-2023 at 12:30pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/5 flex items-center justify-center'>
                                        <Button className='bg-blue-800 hover:bg-blue-600 mr-10'>
                                            Resume
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </Card>
                    </Card>
                </div>
                <div >
                    <Card className='	shadow-none  card-with-no-padding   p-0 pb-10 w-72	'>
                        <p className='text-lg text-center mt-5'>Need help?</p>
                        <hr />
                        <p className='text-gray-500 text-center  text-base'>Contact us at</p>
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center'>
                                <i className='text-blue-800 text-lg fa fa-envelope'></i>
                                <span className='text-sm pt-2'>mskccindia@icliniq.com</span>
                            </div>
                            <div className='flex flex-col items-center mt-5'>
                                <i className='text-blue-800 text-xl fa fa-phone'></i>
                                <span className='text-sm pt-2'>+91 82 700 70000</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Draft