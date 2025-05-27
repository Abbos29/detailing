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

            <Link href="/frakt" onClick={handleClick}>Frakt og betaling</Link>
            <Link href="/produkter" onClick={handleClick}>Produkter</Link>
            <Link href="/omoss" onClick={handleClick}>Om oss</Link>
            <Link href="/kontakt" onClick={handleClick}>Kontakt</Link>
            <Link href="/kategorier" onClick={handleClick}>Kategorier</Link>
        </div>
    );
};

export default NavTop;
