import React from 'react'
import s from './RandomCards.module.scss'
import Container from '@/components/ui/Container/Container'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import ProductCard from '@/components/ui/ProductCard/ProductCard';


const products = [
    {
        id: 1,
        image: '/img/product1.png',
        name: 'Optimum Hyper Foam No Rinse - 32 oz 1',
        price: 25.23,
    },
    {
        id: 2,
        image: '/img/product1.png',
        name: 'Optimum Hyper Foam No Rinse - 32 oz 2',
        price: 25.23,
    },
    {
        id: 3,
        image: '/img/product1.png',
        name: 'Optimum Hyper Foam No Rinse - 32 oz 3',
        price: 25.23,
    },
    {
        id: 4,
        image: '/img/product1.png',
        name: 'Optimum Hyper Foam No Rinse - 32 oz 4',
        price: 25.23,
    },
    {
        id: 5,
        image: '/img/product1.png',
        name: 'Optimum Hyper Foam No Rinse - 32 oz 5',
        price: 25.23,
    },
    {
        id: 6,
        image: '/img/product1.png',
        name: 'Optimum Hyper Foam No Rinse - 32 oz 6',
        price: 25.23,
    },
]

const RandomCards = () => {
    return (
        <>
            <section className={s.randomCards}>
                <Container>
                    <div className={s.wrapper}>
                        <Swiper
                            className={s.swiper}
                            pagination={true}
                            spaceBetween={50}
                            navigation={true}
                            modules={[Navigation]}

                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                520: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <ProductCard id={product.id} image={product.image} name={product.name} price={product.price} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default RandomCards