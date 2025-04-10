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
        title: 'An Outstanding Experience',
        text: 'Working with WorkIn was an absolute game-changer. Their creativity, attention to detail, and dedication to delivering top-quality work exceeded my expectations. The entire process was smooth, and the final result was beyond what I imagined. Looking forward to collaborating again!',
        name: 'Michael J',
        role: 'CEO, TechWave',
        avatar: '/img/reviews-user-1.png',
        rating: '/img/stars-icon.svg',
    },
    {
        id: 2,
        title: 'Professional and Creative',
        text: 'The team at WorkIn brought our vision to life with such professionalism. They listened, iterated quickly, and delivered beyond what we imagined. Highly recommended!',
        name: 'Sarah L',
        role: 'CMO, BrightSolutions',
        avatar: '/img/reviews-user-1.png',
        rating: '/img/stars-icon.svg',
    },
    {
        id: 3,
        title: 'Exceptional Service',
        text: 'From start to finish, the process was seamless. Great communication, amazing design, and fast delivery. We will definitely work with WorkIn again!',
        name: 'David R',
        role: 'Founder, DevCore',
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
                        <h2>What our Client Says</h2>
                        <p>From branding to web design, our work has helped businesses stand out with creativity</p>
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
                                        <img src={slide.rating} alt="rating" />

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
