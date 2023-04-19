
import { Button, Navbar, Accordion, ListGroup } from 'flowbite-react'
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
                className='  z-30  w-full fixed left-0 right-0 pt-7 pb-7'
            >

                <Navbar.Brand href="#">
                    <img
                        src={AssetAccessor.mskcc_Logo}
                        className="mr-3 h-9 md:h-10 pl-2 md:pl-8"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <div className="flex md:order-2  pr-3 md:pr-8 items-center">
                        <img className="h-9 md:h-10 " src={AssetAccessor.ic_white_logo} />
                    </div>
                    <Navbar.Toggle onClick={openAccordation} />
                </div>


                <div className='md:hidden custom-accordation bg-primary w-full mt-5 pt-0 border-none '>
                    <div className='border-collapse'>


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

                        <div className='mskcc-nav-options'>
                            <div className='h-auto py-3  w-full bg-primary border border-gray-400 text-lg'>
                                <span className='ml-8 text-gray-400'>About MSK</span>
                            </div>
                            <div className='h-auto py-3  w-full bg-primary border border-gray-400 text-lg'>
                                <span className='ml-8 text-gray-400'>About MSK</span>
                            </div>
                            <div className='h-auto py-3  w-full bg-primary border border-gray-400 text-lg'>
                                <span className='ml-8 text-gray-400'>About MSK</span>
                            </div>
                            <div className='h-auto py-3  w-full bg-primary border border-gray-400 text-lg'>
                                <span className='ml-8 text-gray-400'>About MSK</span>
                            </div>
                            <div className='h-auto py-3  w-full bg-primary border border-gray-400 text-lg'>
                                <span className='ml-8 text-gray-400'>About MSK</span>
                            </div>
                        </div>






                    </div>


                </div>
                {/* <Accordion collapseAll={true} flush={true} >
                    <Accordion.Panel>
                        <Accordion.Title className='!text-white'>
                            What is Flowbite?
                        </Accordion.Title>
                        <Accordion.Content className='pl-5'>
                            <ListGroup className='	bg-primary border-none'>
                                <ListGroup.Item className='custom-accordation-item'>
                                    <span >Profile</span>
                                    <i className='fa fa-caret-right'></i>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Settings
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Messages
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Download
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='!text-white'>
                            Is there a Figma file available?
                        </Accordion.Title>
                        <Accordion.Content>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel >
                        <Accordion.Title className='!text-white'>
                            What are the differences between Flowbite and Tailwind UI?
                        </Accordion.Title>
                        <Accordion.Content>

                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion> */}




            </Navbar>
        </>
    )
}

export default Nav