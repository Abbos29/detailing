import React from 'react';
import s from './Hero.module.scss';
import Container from '@/components/ui/Container/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
    {
        id: 1,
        title: 'Din ultimate destinasjon for foliering',
        text: 'Over 15 års erfaring med kvalitetsprodukter innen PPF, verktøy og utstyr for profesjonell og entusiastisk foliering 1',
        image: '/img/hero1.jpg',
    },
    {
        id: 2,
        title: 'Din ultimate destinasjon for foliering',
        text: 'Over 15 års erfaring med kvalitetsprodukter innen PPF, verktøy og utstyr for profesjonell og entusiastisk foliering 2',
        image: '/img/hero1.jpg',
    },
    {
        id: 3,
        title: 'Din ultimate destinasjon for foliering',
        text: 'Over 15 års erfaring med kvalitetsprodukter innen PPF, verktøy og utstyr for profesjonell og entusiastisk foliering 3',
        image: '/img/hero1.jpg',
    },
];

const Hero = () => {
    return (
        <section className={s.hero}>
            <Container>
                <div className={s.hero_slider}>
                    <Swiper
                        className={s.swiper}
                        pagination={true}
                        spaceBetween={30}
                        modules={[Pagination]}
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className={s.hero_banner}>
                                    <img src={slide.image} alt={slide.title} />
                                    <h1>{slide.title}</h1>
                                    <p>{slide.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
