import React, { useState } from 'react';
import s from './Header.module.scss';
import { IoIosArrowDown } from 'react-icons/io';

const menuItems = [
    { label: 'Exterior', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Interior', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Tools & Equipment', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Accessories', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Kits & Bundles', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Car Wash & Tunnel', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'More', options: ['Option 1', 'Option 2', 'Option 3'] },
];

const simpleLinks = [
    { label: 'Classes', href: '/classes' },
    { label: 'Deals', href: '/deals' },
    { label: 'Brands', href: '/brands' },
];

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleToggle = (label) => {
        setOpenMenu(openMenu === label ? null : label);
    };

    return (
        <nav className={s.navbar}>
            {menuItems.map((menu) => (
                <div key={menu.label} className={s.dropdown}>
                    <div
                        className={s.dropdownButton}
                        onClick={() => handleToggle(menu.label)}
                    >
                        {menu.label}
                        <span
                            className={`${s.arrow} ${openMenu === menu.label ? s.arrowOpen : ''
                                }`}
                        >
                            <IoIosArrowDown />
                        </span>
                    </div>
                    {openMenu === menu.label && (
                        <div className={s.dropdownOptions}>
                            {menu.options.map((option, index) => (
                                <a
                                    key={index}
                                    //   href={`/category/${menu.label.toLowerCase()}/${index}`} 
                                    href={`/category/`}
                                    className={s.option}
                                >
                                    {option}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {simpleLinks.map((link) => (
                <a key={link.label} href={link.href} className={s.link}>
                    {link.label}
                </a>
            ))}
        </nav>
    );
};

export default NavBar;