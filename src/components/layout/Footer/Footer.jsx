import React from 'react'
import s from './Footer.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.item}>
                        <h3>Sign up and save with us</h3>
                        <p>
                            Get 10% off your first order when you subscribe to receive exclusive offers and new product announcements!
                        </p>
                        <button>Sign up</button>
                    </div>
                    <div className={s.item}>
                        <h3>Customer Service</h3>
                        <Link href="/help-center">Help Center</Link>
                        <Link href="/shipping-delivery">Shipping & Delivery</Link>
                        <Link href="/return-policy">Return Policy</Link>
                        <Link href="/contact-us">Contact Us</Link>
                    </div>
                    <div className={s.item}>
                        <h3>Resources</h3>
                        <Link href="/coupons-promotions">Coupons & Promotions</Link>
                        <Link href="/military-first-responders">Military & First Responders</Link>
                    </div>
                    <div className={s.item}>
                        <h3>Company Info</h3>
                        <Link href="/classes-workshops">Classes & Workshops</Link>
                        <Link href="/about-us">About Us</Link>
                        <Link href="/retail-store">Retail Store</Link>
                        <Link href="/gift-cards">Gift Cards</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
