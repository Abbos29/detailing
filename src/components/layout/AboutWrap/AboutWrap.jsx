import React from 'react'
import s from './AboutWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import ContactForm from '../ContactForm/ContactForm'
import Seo from '@/components/ui/Seo/Seo'

const AboutWrap = ({ brands }) => {
    return (
        <>
            <Seo title={'About Us'} />
            <section className={s.aboutWrap}>
                <Container>
                    <div className={s.main1}>
                        <div className={s.main_left}>
                            <img className={s.main_img} src="./maining.png" alt="" />
                        </div>
                        <div className={s.main_right}>
                            <p className={s.main_p}>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and scrambled it to make a type specimen book. <br /> It has survived not only five centuries, but also the leap into electronic typesetting, <br />remaining essentially unchanged. <br />
                                <br />

                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem <br /> Ipsum passages, and more recently with desktop publishing software like Aldus <br /> PageMaker including versions of Lorem Ipsum. <br />
                                <br />

                                The standard Lorem Ipsum passage, used since the 1500s <br />
                                <br />

                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc</p>
                        </div>
                    </div>
                    <h2 className={s.brand_h2}>Brands we work with</h2>
                    <main className={s.main}>
                        {brands?.map((el) => {
                            return (
                                <img src={el?.image} alt={el?.name} key={el?.id} />
                            )
                        })}
                    </main>
                    <ContactForm />
                </Container>
            </section>
        </>
    )
}

export default AboutWrap