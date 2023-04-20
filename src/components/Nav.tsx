
import { Navbar } from 'flowbite-react'
import AssetAccessor from 'utils/AssetAccessor';
import * as CONSTANTS from '../constants'

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
                <Navbar.Brand href="#">
                    <img
                        src={AssetAccessor.mskcc_Logo}
                        className="mr-3 h-9 md:h-10 pl-2 md:pl-8"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <div className="flex md:order-2 md:!flex-row-reverse">
                    <div className="flex md:order-2  pr-3 md:pr-8 items-center">
                        <img className="h-9 md:h-10 " src={AssetAccessor.ic_white_logo} />
                    </div>
                    <Navbar.Toggle className='block md:!block lg:!hidden' onClick={openAccordation} />
                </div>
                
                <Navbar.Collapse className='hidden md:hidden lg:block'>
                    <div className='text-md flex items-center tracking-wide	font-light'>
                        <i className='fa fa-envelope text-primary pr-2  text-xl'></i>
                        <p>Email: </p>
                        <a className="pl-2 text-secondary" href="mailto:mskccindia@icliniq.com">mskccindia@icliniq.com</a>
                    </div>
                    <div className='text-md flex items-center tracking-wide	font-light'>
                        <i className='fa fa-phone text-primary pr-2 mt-1 text-xl'></i>
                        <p>Phone Number: </p>
                        <a className="pl-2 text-secondary" href="tel:+918270070000">+91 82 700 70000</a>
                    </div>
                </Navbar.Collapse>
                
            </Navbar>
            <div className='lg:hidden custom-accordation bg-white w-full border-none '>
                    <div className='border-collapse bg-primary m-10 mt-2'>
                        {
                            CONSTANTS.MSKCC_MENU.map(data => {
                                return Object.values(data).map(res => {
                                    return <>
                                        {Array.isArray(res) ?
                                            <>
                                                <div className='h-auto   w-full bg-primary border text-white text-md flex justify-between'
                                                    onClick={
                                                        (e: React.MouseEvent<HTMLElement>) => {
                                                            e.stopPropagation();
                                                            menutoggleOptions(e);
                                                        }
                                                    }>
                                                    <span className='ml-4 my-3'>{Object.keys(data)[0].toUpperCase()}</span>

                                                    <div className='h-auto w-12 flex items-center justify-center bg-gray-100/20'>
                                                        <span className=' text-2xl'> + </span>
                                                    </div>
                                                </div>
                                                <div className='mskcc-nav-options'>
                                                    {
                                                        res.map(menuOpt => {
                                                            return <>
                                                                <a href={`${Object.values(menuOpt)[0]}`}>
                                                                    <div className='h-auto py-3  w-full bg-primary border border-gray-400 text-md'>
                                                                        <span className='ml-8 text-gray-400'>{Object.keys(menuOpt)[0].toUpperCase()}</span>
                                                                    </div>
                                                                </a>
                                                            </>
                                                        })
                                                    }
                                                </div>
                                            </>

                                            :
                                            <a href={`${Object.values(data)[0]}`}>
                                                <div className='h-auto py-3 w-full bg-primary border text-white text-md ' onClick={
                                                    (e: React.MouseEvent<HTMLElement>) => {
                                                        e.stopPropagation();
                                                        menutoggleOptions(e);
                                                    }
                                                }>
                                                    <span className='ml-4'>{Object.keys(data)[0].toUpperCase()}</span>
                                                </div>
                                            </a>}
                                    </>

                                })
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