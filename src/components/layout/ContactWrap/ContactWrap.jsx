import React from 'react'
import s from './ContactWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import { FaClock, FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhone, FaTimes } from 'react-icons/fa'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { LuInstagram } from "react-icons/lu";


const ContactWrap = ({ data }) => {
    return (
        <>
            <section className={s.contactWrap}>
                <Container>

                    <Breadcrumbs />

                    <div className={s.wrapper}>
                        <h2>Kontakt vårt kontor</h2>

                        <div className={s.inner}>
                            <div>
                                <p>Våre sosiale medier</p>
                                <div className={s.socials}>
                                    <a href={data[0]?.instagram} target='_blank'>
                                        <LuInstagram />
                                    </a>
                                    <a href={data[0]?.telegram_channel} target='_blank'><img src="/img/icon-tg.svg" alt="ikon" /></a>
                                    <a href={data[0]?.facebook} target='_blank'>
                                        <FaFacebook />
                                    </a>
                                </div>
                            </div>

                            <div>
                                <a href={`tel: ${data[0]?.main_phone}`}>{data[0]?.main_phone}</a>
                                <p>Vårt kontor i Oslo</p>
                            </div>

                            <div>
                                <a href={`tel: ${data[0]?.phone_2}`}>{data[0]?.phone_2}</a>
                                <p>Ring oss 24/7</p>
                            </div>

                            <div>
                                <a href={`mailto: ${data[0]?.email}`}>{data[0]?.email}</a>
                                <p>Send oss en e-post hvis du har spørsmål</p>
                            </div>
                        </div>

                        <div className={s.wrap}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128084.03976962183!2d10.620310792570292!3d59.89375209660966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2z0J7RgdC70L4sINCd0L7RgNCy0LXQs9C40Y8!5e0!3m2!1sru!2slt!4v1745667436905!5m2!1sru!2slt" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                            <div className={s.box}>
                                <h2>Vår kontakt</h2>

                                <p>
                                    <FaClock className={s.icon} />
                                    <b>Vi jobber:</b> Hver dag fra {data[0]?.work_from?.slice(0, 5)} til {data[0]?.work_to?.slice(0, 5)}
                                </p>

                                <a href={`mailto: ${data[0]?.location_link}`}>
                                    <FaMapMarkerAlt className={s.icon} />
                                    <b>Adresse:</b> {data[0]?.address}
                                </a>

                                <a href={`mailto: ${data[0]?.email}`}>
                                    <FaEnvelope className={s.icon} />
                                    <b>E-post:</b> {data[0]?.email}
                                </a>

                                <a href={`tel: ${data[0]?.main_phone}`}>
                                    <FaPhone className={s.icon} />
                                    <b>{data[0]?.main_phone}</b>
                                </a>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactWrap
