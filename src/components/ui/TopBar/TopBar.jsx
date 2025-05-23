import React from 'react';
import s from './TopBar.module.scss';
import Container from '@/components/ui/Container/Container';
import { FaGlobe, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const TopBar = () => {
    return (
        <section className={s.topBar}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.ship}>
                        <p>Gratis frakt over 199 $*</p>
                        <p>
                            9,95 $ fast fraktkostnad
                            <FaGlobe className={s.icon} />
                        </p>
                    </div>

                    <div className={s.contactInfo}>
                        <a href='tel:123456789'><FaPhone /> 1-234-567-899</a>
                        <Link href="/gift-cards">Gavekort</Link>
                        <Link href="/track-order">Spor bestilling</Link>
                        <Link href="/help-center">Hjelpesenter</Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TopBar;
