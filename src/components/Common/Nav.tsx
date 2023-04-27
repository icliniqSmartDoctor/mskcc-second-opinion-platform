
import { Navbar } from 'flowbite-react'
import AssetAccessor from 'utils/AssetAccessor';
import * as CONSTANTS from '../../constants'

type MskccMenu = {
    
}

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
                            className="pr-3 h-14 md:h-14 pl-2"
                            title="MSK Logo" alt="MSK Logo"
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
                            <span className="material-symbols-outlined text-primary pr-2 -mt-1 text-3xl">mail</span>
                            <p className='text-primary text-base'>Email: </p>
                            <a className="pl-2 text-secondary text-base underline hover:no-underline" href="mailto:mskccindia@icliniq.com">mskccindia@icliniq.com</a>
                        </div>
                        <div className='flex items-center tracking-wide font-normal	'>
                            <span className="material-symbols-outlined text-primary pr-2 -mt-1 text-3xl">call</span>
                            <p className='text-primary text-base'>Phone Number: </p>
                            <a className="pl-2 text-secondary text-base underline hover:no-underline" href="tel:+918270070000">+91 82 700 70000</a>
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

                </div>
            </div>
        </>
    )
}

export default Nav