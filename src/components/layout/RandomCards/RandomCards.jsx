import React from 'react'
import s from './RandomCards.module.scss'
import Container from '@/components/ui/Container/Container'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import ProductCard from '@/components/ui/ProductCard/ProductCard';


const RandomCards = ({ products }) => {
    return (
        <>
            <section className={s.randomCards}>
                <Container>
                    <div className={s.wrapper}>
                        <h2 className={s.title}>Populær</h2>
                        <Swiper
                            className={s.swiper}
                            pagination={true}
                            spaceBetween={50}
                            navigation={true}
                            modules={[Navigation]}

                            breakpoints={{
                                0: {
                                    slidesPerView: 1.8,
                                },
                                520: {
                                    slidesPerView: 2.2,
                                },
                                992: {
                                    slidesPerView: 3.2,
                                },
                            }}
                        >
                            {products?.results?.map((product) => (
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