import React from 'react'
import s from './Benefits.module.scss'
import Container from '@/components/ui/Container/Container'
import Benefit from './Benefit'

const benefitsData = [
    {
        id: 1,
        image: "/img/benefit1.png",
        title: "Exterior Detailing",
        text: "With over 10 years of experience in the auto detailing industry, Sparkle & Shine Auto Detailing is your trusted partner for premium car care.",
        list: ["Hand wash and dry", "Wax and polish", "Paint correction and scratch removal", "Tire dressing and trim restoration"],
        position: "right",
    },
    {
        id: 2,
        image: "/img/benefit2.png",
        title: "Interior Detailing",
        text: "Our team of skilled professionals uses state‐of‐the‐art techniques and eco-friendly products to restore and protect your vehicle. We believe that every detail counts and that quality service builds lasting relationships.",
        list: ["Deep cleaning of carpets, seats, and upholstery", "Dashboard, console, and door panel treatment", "Stain removal and odor elimination"],
        position: "left",
    },
    {
        id: 3,
        image: "/img/benefit3.png",
        title: "Specialized Treatments",
        text: "Revitalize your ride with expert care and a showroom finish every time. At Sparkle & Shine, we’re dedicated to making your car look its absolute best—inside and out.",
        list: ["Ceramic Coating for long-lasting shine and protection", "Mobile Detailing: We come to you", "Seasonal Packages & Membership Discounts"],
        position: "right",
    },
];

const Benefits = () => {
    return (
        <>
            <section className={s.benefits}>
                <Container>
                    <div className={s.wrapper}>

                        <div className={`${s.benefit} ${s.main}`}>
                            <div className={s.video}>
                                {/* <video src="" controls></video> */}
                                <img src="/img/benefits-main.svg" alt="img" />
                            </div>

                            <div className={s.content}>
                                <h2>You can trust our brands they reprints quality  and trust. </h2>
                                <h3>At Solterra, we believe that design is not just about aesthetics but about creating meaningful and sustainable spaces. </h3>
                                <h4>We are committed to designing spaces that balance elegance, sustainability, and comfort. Our vision is to deliver design solutions that not only </h4>
                                <div className={s.gallery}>
                                    <img src="/img/benefit-main-1.png" alt="gallery-image" />
                                    <img src="/img/benefit-main-2.png" alt="gallery-image" />
                                </div>
                            </div>
                        </div>

                        {benefitsData.map((benefit) => (
                            <Benefit key={benefit.id} {...benefit} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Benefits