import React from 'react'
import s from './ContactWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTimes } from 'react-icons/fa'

const ContactWrap = () => {
    return (
        <>
            <section className={s.contactWrap}>
                <Container>
                    <div className={s.wrapper}>
                        <h2>Contact to our office</h2>

                        <div className={s.inner}>
                            <div>
                                <p>Our social media</p>
                                <div className={s.socials}>
                                    <a href="" target='_blank'><img src="/img/icon-vk.svg" alt="icon" /></a>
                                    <a href="" target='_blank'><img src="/img/icon-tg.svg" alt="icon" /></a>
                                    <a href="" target='_blank'><img src="/img/icon-wapp.svg" alt="icon" /></a>
                                </div>
                            </div>

                            <div>
                                <a href="">1 265 66 55 855</a>
                                <p>Our office in Oslo</p>
                            </div>

                            <div>
                                <a href="">1 265 66 55 855</a>
                                <p>Call us 24/7</p>
                            </div>

                            <div>
                                <a href="">1 265 66 55 855</a>
                                <p>Send us email if you have questions</p>
                            </div>
                        </div>

                        <div className={s.wrap}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128084.03976962183!2d10.620310792570292!3d59.89375209660966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2z0J7RgdC70L4sINCd0L7RgNCy0LXQs9C40Y8!5e0!3m2!1sru!2slt!4v1745667436905!5m2!1sru!2slt" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                            <div className={s.box}>
                                <h2>Our contact</h2>

                                <p>
                                    <FaClock className={s.icon} />
                                    <b>We work:</b> Every day from 8:00 to 19:00
                                </p>

                                <p>
                                    <FaMapMarkerAlt className={s.icon} />
                                    <b>Adress:</b> Oslo Noraway
                                </p>

                                <p>
                                    <FaEnvelope className={s.icon} />
                                    <b>Email:</b> sales@detailing.com
                                </p>

                                <p>
                                    <FaPhone className={s.icon} />
                                    <b>1 265 66 55 855</b>
                                </p>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactWrap
