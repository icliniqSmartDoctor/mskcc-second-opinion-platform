
import { Button, Navbar } from 'flowbite-react'
import AssetAccessor from 'utils/AssetAccessor'

function Nav() {
    return (
        <>
            <Navbar
                className=' shadow-lg z-30  w-full fixed left-0 right-0 pt-7 pb-7'
            >
                <Navbar.Brand href="#">
                    <img
                        src={AssetAccessor.mskcc_Logo}
                        className="mr-3 h-6 sm:h-9 pl-8"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <div className="flex md:order-2 pr-8 items-center">

                    <img src={AssetAccessor.CTA} />
                </div>
            </Navbar>
        </>
    )
}

export default Nav