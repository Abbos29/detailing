import React from 'react'
import s from './AboutWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import ContactForm from '../ContactForm/ContactForm'
import Seo from '@/components/ui/Seo/Seo'

const AboutWrap = ({ brands, about_us }) => {
    const aboutUsData = Array.isArray(about_us) ? about_us[0] : about_us;
    
    console.log(about_us);

    return (
        <>
            <Seo title={'Om oss'} />
            <section className={s.aboutWrap}>
                <Container>
                    <div className={s.main1}>
                        <div className={s.main_left}>
                            <img className={s.main_img} src={aboutUsData?.photo} alt="Om oss" />
                        </div>
                        <div className={s.main_right}>
                            <p className={s.main_p}>{aboutUsData?.description}</p>
                        </div>
                    </div>
                    <h2 className={s.brand_h2}>Merker vi samarbeider med</h2>
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
