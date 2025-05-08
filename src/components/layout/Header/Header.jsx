import React, { useEffect, useState } from 'react';
import s from './Header.module.scss';
import Container from '@/components/ui/Container/Container';
import { FaRegHeart, FaRegUser, FaSearch, FaShoppingBag } from 'react-icons/fa';
import Link from 'next/link';
import NavBar from './NavBar';
import NavTop from './NavTop';
import useBurger from '@/store/useBurger';
import { useIsClient } from 'usehooks-ts';
import { useCart } from 'react-use-cart';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';

const Header = () => {
    const { isMenu, toggleMenu } = useBurger();
    const isClient = useIsClient()
    const { fav } = useAppContext()
    const { totalItems } = useCart()
    const router = useRouter();
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        if (searchText.trim()) {
            router.push({
                pathname: '/catalog',
                query: { search: searchText.trim() },
            });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    useEffect(() => {
        const handleOverflow = () => {
            const isMobile = window.innerWidth < 768;
            document.body.style.overflow = isMenu && isMobile ? 'hidden' : '';
        };

        handleOverflow();

        window.addEventListener('resize', handleOverflow);
        return () => {
            window.removeEventListener('resize', handleOverflow);
            document.body.style.overflow = '';
        };
    }, [isMenu]);


    return (
        <>
            <header className={s.header}>
                <Container>
                    <div className={s.pcNavTop}>
                        <NavTop />
                    </div>

                    <div className={s.wrap}>
                        <Link href="/" className={s.logo}>
                            <img src="/logo.png" alt="logo" />
                        </Link>

                        <div className={`${s.burgerMenu} ${isMenu ? s.active : ''}`}>
                            <div className={s.search}>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <button onClick={handleSearch}>
                                    <FaSearch />
                                </button>
                            </div>

                            <div className={s.inner}>
                                {isClient && <Link href="/favourites" onClick={toggleMenu}>
                                    <FaRegHeart />
                                    <sub>{fav.length}</sub>
                                </Link>}
                                {isClient && <Link href="/cart" onClick={toggleMenu}>
                                    <FaShoppingBag />
                                    <sub>{totalItems}</sub>
                                </Link>}
                                <Link href="/auth" onClick={toggleMenu}>
                                    <FaRegUser />
                                </Link>
                            </div>

                            <div className={s.mobileNavTop}>
                                <NavTop onLinkClick={toggleMenu} />
                            </div>

                            <div className={s.mobileNavbar}>
                                <NavBar onLinkClick={toggleMenu} />
                            </div>
                        </div>

                        <div
                            className={`${s.burger} ${isMenu ? s.active : ''}`}
                            onClick={toggleMenu}
                        >
                            <span className={s.line}></span>
                            <span className={s.line}></span>
                            <span className={s.line}></span>
                        </div>
                    </div>

                    <div className={s.pcNavbar}>
                        <NavBar />
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;
