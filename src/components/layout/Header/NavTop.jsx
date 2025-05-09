import React from 'react';
import s from './Header.module.scss';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';

const NavTop = ({ onLinkClick }) => {
    const handleClick = () => {
        if (window.innerWidth < 768 && onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <div className={s.nav}>
            <div className={s.location}>
                <FaLocationArrow className={s.icon} />
                Oslo
            </div>

            <Link href="/shipping" onClick={handleClick}>Shipping and payments</Link>
            <Link href="/catalog" onClick={handleClick}>Products</Link>
            <Link href="/about" onClick={handleClick}>About us</Link>
            <Link href="/contact" onClick={handleClick}>Contact</Link>
        </div>
    );
};

export default NavTop;
