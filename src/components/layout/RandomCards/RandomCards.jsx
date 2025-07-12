import React, { useState } from 'react';
import s from './RandomCards.module.scss';
import Container from '@/components/ui/Container/Container';
import ProductCard from '@/components/ui/ProductCard/ProductCard';

const RandomCards = ({ products }) => {
    const [visibleCount, setVisibleCount] = useState(4);
    const allProducts = products?.results || [];

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    const visibleProducts = allProducts.slice(0, visibleCount);

    return (
        <section className={s.randomCards}>
            <Container>
                <div className={s.wrapper}>
                    <h2 className={s.title}>Populær</h2>
                    <div className={s.grid}>
                        {visibleProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                            />
                        ))}
                    </div>

                    {visibleCount < allProducts.length && (
                        <div className={s.loadMoreWrapper}>
                            <button className={s.loadMoreBtn} onClick={handleLoadMore}>
                                Vis flere produkter
                            </button>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default RandomCards;
