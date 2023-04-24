// import React, { useEffect, useState } from 'react'
import { Button, Navbar } from 'flowbite-react'
import AssetAccessor from 'utils/AssetAccessor'
// import { isLoggedIn } from 'stores/authStore'
// import { Cookies } from 'react-cookie'

function DashNav() {
    return (
        <>
            <Navbar
                fluid={true}
                className=' h-20 shadow-lg z-30  w-full fixed left-0 right-0'
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

export default DashNav