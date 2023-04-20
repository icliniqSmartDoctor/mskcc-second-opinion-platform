import * as CONSTANTS from '../constants'

function MenuNav() {

    return (
        <>
            <div className='bg-primary absolute h-20 w-full hidden lg:block'>
                <div className='container mx-auto px-10 flex justify-between items-center h-full'>
                    <div className='flex text-white items-center h-full tracking-wide'>

                        {
                            CONSTANTS.MSKCC_MENU.map(data => {
                                return Object.values(data).map(res => {
                                    return <>
                                        {Array.isArray(res) ?
                                            <div className='relative  h-full flex items-center'>

                                                <div className='px-4 capitalize cursor-pointer menu-opt w-full h-full flex items-center'> <span>{Object.keys(data)[0]} +</span> </div>
                                                <div className='mskcc-menu-nav-options h-auto top-20  left-5 absolute w-60 max-w-60 leading-9 bg-primary  border-t-4 border-secondary px-5 py-3'>
                                                    {
                                                        res.map(menuOpt => {
                                                            return <>
                                                                <a href={`${Object.values(menuOpt)[0]}`}>
                                                                    <div className='h-auto py-1  w-full '>
                                                                        <span className='capitalize'>{Object.keys(menuOpt)[0]}</span>
                                                                    </div>
                                                                </a>
                                                            </>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            :
                                            <a href={`${Object.values(data)[0]}`}><div className='mx-4 capitalize'>{Object.keys(data)[0]}</div></a>
                                        }
                                    </>

                                })
                            })
                        }
                    </div>
                    <div className='mx-4 capitalize cursor-pointer h-full flex text-white tracking-wide items-center'>
                        <a href="./login"><div>Login</div></a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MenuNav