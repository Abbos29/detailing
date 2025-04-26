import React from 'react'
import s from './CartWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Button from '@/components/ui/Button/Button'

const CartWrap = () => {
    return (
        <>
            <section className={s.cartWrap}>
                <Container>
                    <div className={s.wrap}>

                        <div className={s.wrapper}>

                            <div className={s.info}>
                                <div className={s.meta}>
                                    <p>Item: <span>#PNS-G1301</span></p>
                                    <p>Manufacturer Part: <span>#G1301</span></p>
                                </div>

                                <h1 className={s.title}>Griot's Garage The BOSS Foam Cannon</h1>

                                <div className={s.rating}>
                                    {'★★★★★'.split('').map((star, i) => (
                                        <span key={i}>☆</span>
                                    ))}
                                </div>

                                <div className={s.controls}>
                                    <div className={s.counter}>
                                        <button>+</button>
                                        <span>2</span>
                                        <button>-</button>
                                    </div>
                                </div>

                                <p className={s.shipping}>Shipping: <span>Usually ships the same or next business day</span></p>

                                <div className={s.meta}>
                                    <p>Brand Name: <span>NARPPF</span></p>
                                </div>

                                <div className={s.price}>$55.22</div>

                                <div className={s.controls}>
                                    <Button>Add to Cart</Button>

                                    <div className={s.delete_btn}>
                                        <img src="/img/delete-icon.svg" alt="icon" />
                                        Delete
                                    </div>
                                </div>

                            </div>

                            <div className={s.gallery}>
                                <div className={s.mainThumb}>
                                    <img src="/img/product-thumb.png" alt="Main product view" />
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default CartWrap