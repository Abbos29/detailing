import React from 'react'
import s from './Reviews.module.scss'
import Container from '@/components/ui/Container/Container'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
    {
        id: 1,
        title: 'En Fremragende Opplevelse',
        text: 'Å jobbe med WorkIn var en virkelig game-changer. Deres kreativitet, sans for detaljer og dedikasjon til kvalitet overgikk alle forventninger. Prosessen var smidig, og sluttresultatet langt bedre enn jeg hadde forestilt meg. Gleder meg til neste samarbeid!',
        name: 'Michael J',
        role: 'CEO, TechWave',
        avatar: '/img/reviews-user-1.png',
        rating: '/img/stars-icon.svg',
    },
    {
        id: 2,
        title: 'Profesjonelt og Kreativt',
        text: 'Teamet hos WorkIn gjorde vår visjon til virkelighet med høy grad av profesjonalitet. De lyttet, jobbet raskt og leverte langt mer enn forventet. Anbefales på det sterkeste!',
        name: 'Sarah L',
        role: 'CMO, BrightSolutions',
        avatar: '/img/reviews-user-1.png',
        rating: '/img/stars-icon.svg',
    },
    {
        id: 3,
        title: 'Eksepsjonell Tjeneste',
        text: 'Hele prosessen fra start til slutt var sømløs. God kommunikasjon, fantastisk design og rask levering. Vi kommer garantert til å samarbeide med WorkIn igjen!',
        name: 'David R',
        role: 'Grunnlegger, DevCore',
        avatar: '/img/reviews-user-1.png',
        rating: '/img/stars-icon.svg',
    },
]

const Reviews = () => {
    return (
        <section className={s.reviews}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.box}>
                        <h2>Hva våre kunder sier</h2>
                        <p>Fra merkevarebygging til webdesign – vårt arbeid har hjulpet bedrifter med å skille seg ut gjennom kreativitet</p>
                    </div>

                    <div className={`${s.slider} reviews-slider`}>
                        <Swiper
                            className={s.swiper}
                            pagination={true}
                            navigation={true}
                            spaceBetween={30}
                            slidesPerView={1}
                            modules={[Pagination, Navigation]}
                        >
                            {slides.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className={s.slide}>
                                        <h4>{slide.title}</h4>
                                        <p>{slide.text}</p>
                                        <img src={slide.rating} alt="vurdering" />

                                        <div className={s.slide_box}>
                                            <img className={s.slide_icon} src={slide.avatar} alt={`${slide.name} avatar`} />
                                            <div>
                                                <h5>{slide.name}</h5>
                                                <b>{slide.role}</b>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Reviews
