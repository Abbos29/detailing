import React from 'react'
import s from './Footer.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'
// import { useAppContext } from '../../../context/AppContext'
import { useAppContext } from '@/context/AppContext';


const Footer = () => {

    const { openModal } = useAppContext();

    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.item}>
                        <h3>Meld deg på og spar med oss</h3>
                        <p>
                            Få 10 % rabatt på din første bestilling når du abonnerer på eksklusive tilbud og produktnyheter!
                        </p>
                        {/* <button>Meld deg på</button> */}
                        <button onClick={openModal}>Meld deg på</button>

                    </div>
                    <div className={s.item}>
                        <h3>Kundeservice</h3>
                        <Link href="/help-center">Hjelpesenter</Link>
                        <Link href="/shipping-delivery">Frakt og levering</Link>
                        <Link href="/return-policy">Returpolicy</Link>
                        <Link href="/contact-us">Kontakt oss</Link>
                    </div>
                    <div className={s.item}>
                        <h3>Ressurser</h3>
                        <Link href="/coupons-promotions">Rabatter og kampanjer</Link>
                        <Link href="/military-first-responders">Militær og nødetater</Link>
                    </div>
                    <div className={s.item}>
                        <h3>Om selskapet</h3>
                        <Link href="/classes-workshops">Kurs og verksteder</Link>
                        <Link href="/about-us">Om oss</Link>
                        <Link href="/retail-store">Butikk</Link>
                        <Link href="/gift-cards">Gavekort</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
