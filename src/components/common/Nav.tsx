
import { Navbar } from 'flowbite-react'
import AssetAccessor from 'utils/AssetAccessor';
import * as CONSTANTS from '../../constants'

function Nav() {

    const openAccordation = () => {
        const customAccordation = document.getElementsByClassName('custom-accordation')[0];
        customAccordation.classList.toggle('custom-accordation-open');
    }

    const menutoggleOptions = (e: React.MouseEvent<HTMLElement>) => {
        if (e.currentTarget?.nextElementSibling?.classList.contains('mskcc-nav-options')) {
            const additionalMenu = e.currentTarget?.nextElementSibling;
            additionalMenu.classList.toggle('mskcc-nav-option-open');
        }
    }

    return (
        <>
            <Navbar
                className='  z-30  w-full relative left-0 right-0 pt-7 pb-7'
            >
                <div className='container-alternate mx-auto flex w-full justify-between items-center'>
                    <Navbar.Brand href="#">
                        <img
                            src={AssetAccessor.mskcc_Logo}
                            className="mr-3 h-8 md:h-10 pl-2 "
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <div className="flex md:order-2 md:!flex-row-reverse">
                        <div className="flex md:order-2  pr-3 md:pr-8 items-center">
                            <img className="h-7 md:h-10 " src={AssetAccessor.ic_white_logo} />
                        </div>
                        <Navbar.Toggle className='block md:!block lg:!hidden' onClick={openAccordation} />
                    </div>

                    <Navbar.Collapse className='hidden md:hidden lg:block'>
                        <div className='text-md flex items-center tracking-wide	font-light'>
                            <i className='fa fa-envelope text-primary pr-2 -mt-1 text-xl'></i>
                            <p>Email: </p>
                            <a className="pl-2 text-secondary" href="mailto:mskccindia@icliniq.com">mskccindia@icliniq.com</a>
                        </div>
                        <div className='text-md flex items-center tracking-wide	font-light'>
                            <i className='fa fa-phone text-primary pr-2  text-xl'></i>
                            <p>Phone Number: </p>
                            <a className="pl-2 text-secondary" href="tel:+918270070000">+91 82 700 70000</a>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div className='lg:hidden custom-accordation bg-white w-full border-none '>
                <div className='border-collapse bg-primary m-5 mt-2'>
                    {
                        
                           Object.keys( CONSTANTS.MSKCC_MENU ).map(res => {
                                return <>
                                    {Array.isArray(CONSTANTS.MSKCC_MENU[res]) ?
                                        <>
                                            <div className='h-auto   w-full bg-primary border text-white text-md flex justify-between'
                                                onClick={
                                                    (e: React.MouseEvent<HTMLElement>) => {
                                                        e.stopPropagation();
                                                        menutoggleOptions(e);
                                                    }
                                                }>
                                                <span className='ml-4 my-3'>{res.toUpperCase()}</span>

                                                <div className='h-auto w-12 flex items-center justify-center bg-gray-100/20'>
                                                    <span className=' text-2xl'> + </span>
                                                </div>
                                            </div>
                                            <div className='mskcc-nav-options'>
                                                {
                                                    CONSTANTS.MSKCC_MENU[res].map((menuOpt : string) => {
                                                        return <>
                                                            <a href={`${Object.values(menuOpt).toString()}`}>
                                                                <div className='h-auto py-3  w-full bg-primary border border-gray-400 text-md'>
                                                                    <span className='ml-8 text-gray-400'>{Object.keys(menuOpt).toString().toUpperCase()}</span>
                                                                </div>
                                                            </a>
                                                        </>
                                                    })
                                                }
                                            </div>
                                        </>

                                        :
                                        <a href={`${CONSTANTS.MSKCC_MENU[res]}`}>
                                            <div className='h-auto py-3 w-full bg-primary border text-white text-md ' onClick={
                                                (e: React.MouseEvent<HTMLElement>) => {
                                                    e.stopPropagation();
                                                    menutoggleOptions(e);
                                                }
                                            }>
                                                <span className='ml-4'>{res.toUpperCase()}</span>
                                            </div>
                                        </a>}
                                </>

                            })
                   
                    }

                    <a href='./login'>
                        <div className='h-auto py-3 w-full bg-primary border text-white uppercase text-md '>
                            <span className='ml-4'>Login</span>
                        </div>
                    </a>

                </div>
            </div>
        </>
    )
}

export default Nav