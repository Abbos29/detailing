import React from 'react'
import s from './Header.module.scss'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const NavTop = () => {
    return (
        <>
            <div className={s.nav}>
                <div className={s.location}>
                    <FaLocationArrow className={s.icon} />
                    Oslo
                </div>

                <Link href="/">Shipping and payments</Link>
                <Link href="/">Products</Link>
                <Link href="/">About us</Link>
                <Link href="/">Contact</Link>
            </div>
        </>
    )
}

export default NavTop