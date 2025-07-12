import React from 'react';
import s from './ErrorWrap.module.scss';
import Container from '../Container/Container';
import Link from 'next/link';
import { FaTools } from 'react-icons/fa';

const ErrorWrap = () => {
    return (
        <section className={s.errorwrap}>
            <Container>
                <div className={s.wrapper}>
                    <FaTools fontSize="3rem" className={s.icon} />
                    <h1 className={s.title}>Denne siden er under utvikling</h1>
                    <p className={s.text}>Vi jobber med å gjøre den tilgjengelig så snart som mulig.</p>
                    <Link href="/" className={s.link}>
                        Tilbake til forsiden
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default ErrorWrap;
