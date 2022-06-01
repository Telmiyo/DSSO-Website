import Image from 'next/image'
import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const SetRoleColor = (_role) => {
    switch (_role) {

        case "Programmer":
            return "bg-roles-programmer"
        case "Designer":
            return "bg-roles-designer"
        case "Artist":
            return "bg-roles-artist"
        case "Lead Programmer":
            return "bg-roles-leadprogrammer"
        case "Lead Desginer":
            return "bg-roles-leaddesigner"
        case "Lead Artist":
            return "bg-roles-artist"
        case "Producer":
            return "bg-roles-producer"
    }

    return "bg-gray-200"

}

export const MemberFrame = ({ src, name, role, github, linkdn }) => {
    return (
        <div className='rounded-xl shadow-xl w-1/2'>
            <div className='flex flex-col justify-around h-100 space-y-2 py-4 items-center'>

                <Image src={src} width={120} height={120} objectFit="cover" className="rounded-full" />

                <p>{name}</p>
                <div className={`${SetRoleColor(role)} text-center rounded-xl w-40`}>{role}</div>
                <div className="flex flex-row space-x-4">
                    <a href={github}>
                        <IoLogoGithub size={35}/>
                    </a>
                    <a href={linkdn}>
                        <IoLogoLinkedin size={35} className="text-blue-500 " />
                    </a>
                </div>
            </div>
        </div>
    )
}

export const ToolFrame = ({ src, role, name, desc }) => {
    return (
        <div className='rounded-xl shadow-xl w-[468px]'>
            <div className='flex flex-row justify-start h-100 space-x-4 p-4 items-center'>
                <div className={`${SetRoleColor(role)} text-center rounded-xl p-1`}>
                <Image src={src} width={50} height={50} objectFit="cover" className="rounded-full" />
                </div>
                <p>{name}</p>
                
            </div>
                <p className='px-4 pb-4'>{desc}</p>
        </div>
    )
}