import {MSKCC_MENU} from 'constants/HomeConstants'

function MenuNav() {

    return (
        <>
            <div className='bg-primary relative h-16 w-full hidden lg:block'>
                <div className='container-alternate mx-auto px-10 flex justify-between items-center h-full'>
                    <div className='flex text-white items-center h-full tracking-wide w-full'>

                        {
                            Object.keys(MSKCC_MENU).map((res) => {
                                return <>
                                    {Array.isArray(MSKCC_MENU[res]) ?

                                        res.toLowerCase() === 'login' ?
                                            <div className='relative  h-full flex items-center ml-auto'>
                                                <div className='px-4 capitalize cursor-pointer menu-opt w-full h-full flex items-center font-medium'> <span>{res} </span> </div>
                                                <div className='mskcc-menu-nav-options h-auto top-16 right-5 absolute w-60 max-w-60 leading-9 bg-primary  border-t-4 border-secondary px-5 py-3'>
                                                    {
                                                        (Object.values(MSKCC_MENU[res])).map((menuOpt: string) => {
                                                            return <>
                                                                <a href={`${Object.values(menuOpt).toString()}`}>
                                                                    <div className='h-auto py-1  w-full ml-auto'>
                                                                        <span className='capitalize'>{Object.keys(menuOpt).toString()}</span>
                                                                    </div>
                                                                </a>
                                                            </>
                                                        })
                                                    }

                                                </div>
                                            </div> :
                                            <div className='relative  h-full flex items-center'>
                                                <div className='px-4 capitalize cursor-pointer menu-opt w-full h-full flex items-center font-medium'> <span>{res} +</span> </div>
                                                <div className='mskcc-menu-nav-options h-auto top-16  left-5 absolute w-60 max-w-60 leading-9 bg-primary  border-t-4 border-secondary px-5 py-3'>
                                                    {
                                                       (Object.values(MSKCC_MENU[res])).map((menuOpt: string) => {
                                                            return <>
                                                                <a href={`${Object.values(menuOpt).toString()}`}>
                                                                    <div className='h-auto py-1  w-full ml-auto'>
                                                                        <span className='capitalize'>{Object.keys(menuOpt).toString()}</span>
                                                                    </div>
                                                                </a>
                                                            </>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        :

                                        <a href={`${MSKCC_MENU[res]}`}>
                                            <div className='mx-4 capitalize font-medium'>
                                                {
                                                    res.toString().toLowerCase() === 'home' ? 
                                                    <svg className="relative -top-1" id="Layer_1" fill="#fff" height="30" width="30" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 36"><path d="M24,6,2,22.75l1.8,2.4L8,22V42H40V22l4.2,3.2L46,22.8ZM37,39H11V19.65l13-9.9,13,9.9Z" transform="translate(-2 -6)"/></svg>
                                                    : res
                                                }
                                            </div>
                                        </a>
                                    }
                                </>

                            })

                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default MenuNav