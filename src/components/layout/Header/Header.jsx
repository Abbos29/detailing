import React, { useState, useEffect } from 'react';
import s from './Header.module.scss';
import Container from '@/components/ui/Container/Container';
import { FaRegHeart, FaRegUser, FaSearch, FaShoppingBag } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavBar from './NavBar';
import NavTop from './NavTop';

const Header = () => {
    const [isMenu, setIsMenu] = useState(false);
    const router = useRouter();

    const handleMenu = () => {
        setIsMenu(!isMenu);
    };

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenu(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router]);

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
                                <input type="text" placeholder="Search" />
                                <button>
                                    <FaSearch />
                                </button>
                            </div>

                            <div className={s.inner}>
                                <Link href="/">
                                    <FaRegHeart />
                                </Link>
                                <Link href="/">
                                    <FaShoppingBag />
                                </Link>
                                <Link href="/">
                                    <FaRegUser />
                                </Link>
                            </div>

                            <div className={s.mobileNavTop}>
                                <NavTop />
                            </div>

                            <div className={s.mobileNavbar}>
                                <NavBar />
                            </div>
                        </div>

                        <div className={`${s.burger} ${isMenu ? s.active : ''}`} onClick={handleMenu}>
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