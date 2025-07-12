import React from 'react'
import s from './ContactForm.module.scss'
import Container from '@/components/ui/Container/Container'

const ContactForm = () => {
    return (
        <>
            <section className={s.contactForm}>
                <Container>
                    <div className={s.wrapper}>
                        <div className={s.left}>
                            {/* <img className={s.picture} src="./img/oper-2.jpg" alt="" /> */}
                            <img className={s.picture} src="/img/conctacts-img.png" alt="image" />
                        </div>
                        <div className={s.right}>
                            <h1 className={s.contactForm_h1}>Har du fortsatt spørsmål?</h1>
                            <h2 className={s.contactForm_h2}>Ring oss</h2>
                            {/* <b className={s.contactForm_b}>1 265 65 66 669</b> */}
                            <b className={s.contactForm_b}>
                                <a href="mailto:sales@detailing.com">sales@detailing.com</a>
                            </b>
                            <br />
                            <input className={s.contactForm_input} type="number" placeholder='Ditt nummer' />
                            <br />
                            <button className={s.contactForm_button}>Ring meg tilbake</button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactForm
