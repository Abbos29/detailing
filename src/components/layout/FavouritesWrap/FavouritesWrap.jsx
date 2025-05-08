import React from 'react'
import s from './FavouritesWrap.module.scss'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import Container from '@/components/ui/Container/Container'
import Button from '@/components/ui/Button/Button'

const FavouritesWrap = ({ fav }) => {
    function clearFavs() {
        localStorage.removeItem("favourites")
        window.location.reload()
    }
    return (
        <>
            <section className={s.products}>
                {fav.length ? (
                    <Container>
                        <div className={s.clear_favs}>
                            <Button onClick={clearFavs}>Clear Favourites</Button>
                        </div>
                        <div className={s.wrap}>
                            {fav?.map((el) => (
                                <ProductCard key={el?.id} id={el?.id} image={el?.image} name={el?.name} price={el?.price} view={el?.view} />
                            ))}
                        </div>
                    </Container>
                ) : (
                    <div className={s.empty}>
                        <img src='/img/empty-favourites.webp' alt="" />
                        <h2>Not found...</h2>
                    </div>
                )}
            </section>
        </>
    )
}

export default FavouritesWrap


