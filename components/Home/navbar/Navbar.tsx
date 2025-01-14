import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from '../../common/Button'

const Navbar = () => {
    return (
        <nav className='flexBetween max-container 
   padding-container relative z-30 py-5 '>
            <Link href="/">
                <Image src="/ta-logo.png" width={74} height={29} alt="logo" />

            </Link>
            <ul className='hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                        className='regular-16 text-gray-50 flexCenter
                cursor-pointer pb-1.5 transition-all hover:font-bold '>
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    variant="btn_purple"
                    icon='/user.svg'
                />
            </div>
            <Image
            src="menu.svg"
            width={32}
            height={32}
            alt="menu" 
            className='inline-block lg:hidden cursor-pointer'
            />
        </nav>
    )
}

export default Navbar