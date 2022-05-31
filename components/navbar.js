import React, { useState } from 'react'
import { IoMenuOutline, IoCloseOutline, IoLogoGithub } from 'react-icons/io5'
import NextLink from 'next/link'
import Image from 'next/image'

export default function Navbar(props) {
    const [isActive, setActive] = useState("none")

    return (
        <nav
            {...props}
        >
            {/* Navbar */}
            <div className='bg-transparent flex w-full justify-between py-2 items-center'>
                <IoMenuOutline className=' text-white text-2xl invisible ml-2' />
                <div className='cursor-pointer'>
                    <NextLink href="/" >
                        <Image
                            layout="intrinsic"
                            src="/logo.png"
                            width="50px"
                            height="50px"
                        ></Image>

                    </NextLink>
                </div>
                <button className='text-gray text-2xl mr-2' onClick={() => isActive == 'flex' ? setActive("none") : setActive("flex")}>
                    {isActive == 'flex' ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
                </button>
            </div>
            {/* SideBar Navbar */}

            <div className={`${isActive == 'flex' ? 'flex' : 'hidden'} bg-red-200 fixed right-0 w-1/2 h-screen flex-col justify-center items-center `}>
                <div className='mt-8 '>
                    <NextLink href="/" >
                        <a >Home</a>
                    </NextLink>

                </div>
                <div className='mt-8 '>
                    <NextLink href="/game" >
                        <a >Game</a>
                    </NextLink>

                </div>
                <div className='mt-8 '>
                    <NextLink href="/engine" >
                        <a >Engine</a>
                    </NextLink>

                </div>
                <div className='mt-8 '>
                    <NextLink href="/team" >
                        <a >Team</a>
                    </NextLink>

                </div>
                <div className='mt-8 '>
                    <NextLink href="/production" >
                        <a >Production</a>
                    </NextLink>

                </div>
                <div className='mt-8 '>
                    <NextLink href="/gallery" >
                        <a >Gallery</a>
                    </NextLink>

                </div>
                <div className='mt-8 '>
                    <NextLink href="/postmortem" >
                        <a >Post Mortem</a>
                    </NextLink>

                </div>
                <div className='mt-8 '>
                    <NextLink href="https://github.com/Chamfer-Studios/Dune-Special-Spice-Ops" target="_blank" >
                        <a className='flex flex-row items-center'><IoLogoGithub className='mr-2'/>View Source</a>
                    </NextLink>

                </div>


            </div>



        </nav>
    )
}
