
import { Navbar } from 'flowbite-react'
import AssetAccessor from 'utils/AssetAccessor';
import {MSKCC_MENU } from 'constants/HomeConstants'



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
                className='z-30 w-full relative left-0 right-0 pt-7 pb-7'
            >
                <div className='container-alternate mx-auto flex w-full justify-between items-center !p-0'>
                    <Navbar.Brand href="https://mskcc.icliniq.com/">
                        <img
                            src='https://assets.icliniq.com/mskcc/logo/msk-logo-blue.svg'
                            className="pr-3 h-14 md:h-14 pl-2 w-64"
                            title="MSK Logo" alt="MSK Logo"
                            width="1165" height="246"
                        />
                    </Navbar.Brand>
                    <div className="flex md:order-2 md:!flex-row-reverse">
                        <div className="flex md:order-2  pr-3 md:pr-8 items-center">
                            <a href="https://mskcc.icliniq.com/"><img className="h-14 md:h-14" title="iCliniq Logo" alt="iCliniq Logo" src="https://assets.icliniq.com/v2/assets/images/iCliniq-logo/ic-white-logo.svg" /></a>
                        </div>
                        <Navbar.Toggle className='block md:!block lg:!hidden' onClick={openAccordation} />
                    </div>

                    <Navbar.Collapse className='hidden md:hidden lg:block'>
                        <div className='flex items-center tracking-wide font-normal	'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' fill="#002569" height="30" viewBox="0 96 960 960" width="30"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z"/></svg>
                            <p className='text-primary text-base'>Email: </p>
                            <a className="pl-2 text-secondary text-base underline hover:no-underline" href="mailto:mskccindia@icliniq.com">mskccindia@icliniq.com</a>
                        </div>
                        <div className='flex items-center tracking-wide font-normal'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' fill="#002569" height="30" viewBox="0 96 960 960" width="30"><path d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z"/></svg>
                            <p className='text-primary text-base'>Phone Number: </p>
                            <a className="pl-2 text-secondary text-base underline hover:no-underline" href="tel:+918270070000">+91 82 700 70000</a>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div className='lg:hidden custom-accordation bg-white w-full border-none '>
                <div className='border-collapse bg-primary m-5 mt-2'>
                    {
                           Object.keys( MSKCC_MENU ).map(res => {
                                return <>
                                    {Array.isArray(MSKCC_MENU[res]) ?
                                        <>
                                            <div className='h-auto w-full bg-primary border text-white text-md flex justify-between'
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
                                                     (Object.values(MSKCC_MENU[res])).map((menuOpt : string) => {
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
                                        <a href={`${MSKCC_MENU[res]}`}>
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

                </div>
            </div>
        </>
    )
}

export default Nav