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
                            <img className={s.picture} src="./oper.png" alt="" />
                        </div>
                        <div className={s.right}>
                            <h1 className={s.contactForm_h1}>Do you still have a qeustion?</h1>
                            <h2 className={s.contactForm_h2}>Call us</h2>
                            <b className={s.contactForm_b}>1 265 65 66 669</b>
                            <br />
                            <input className={s.contactForm_input} type="number" placeholder='Your Number' />
                            <br />
                            <button className={s.contactForm_button}>Call back</button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactForm