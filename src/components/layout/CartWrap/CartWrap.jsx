import React from 'react'
import s from './CartWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import { useIsClient } from 'usehooks-ts'
import { useCart } from 'react-use-cart'
import { FaRegTrashAlt } from 'react-icons/fa'

const CartWrap = () => {
    const isClient = useIsClient();
    const { items, updateItemQuantity, removeItem } = useCart();
    return (
        <>
            <section className={s.cartWrap}>
                <Container>
                    {isClient && <div className={s.wrap}>
                        {items.map((el) => {
                            const priceCount = el.quantity * el.price;
                            return (
                                <div className={s.wrapper}>

                                    <div className={s.info}>
                                        <div className={s.meta}>
                                            <p>Item: <span>#PNS-G1301</span></p>
                                            <p>Manufacturer Part: <span>#G1301</span></p>
                                        </div>

                                        <h1 className={s.title}>{el.name}</h1>

                                        <div className={s.rating}>
                                            {'★★★★★'.split('').map((star, i) => (
                                                <span key={i}>☆</span>
                                            ))}
                                        </div>

                                        <div className={s.controls}>
                                            <div className={s.counter}>
                                                <button onClick={() => updateItemQuantity(el.id, el.quantity + 1)}>+</button>
                                                <span>{el.quantity}</span>
                                                <button onClick={() => updateItemQuantity(el.id, el.quantity - 1)}>-</button>
                                            </div>
                                        </div>

                                        <p className={s.shipping}>Shipping: <span>Usually ships the same or next business day</span></p>

                                        <div className={s.meta}>
                                            <p>Brand Name: <span>NARPPF</span></p>
                                        </div>

                                        <div className={s.price}>${priceCount}</div>

                                        <div className={s.controls}>
                                            {/* <Button>Add to Cart</Button> */}

                                            <div onClick={() => removeItem(el.id)} className={s.delete_btn}>
                                                <div className={s.trash}>
                                                    <FaRegTrashAlt className={s.icon} />
                                                </div>
                                                Delete
                                                {/* img ni normalniy qilish kere delete */}
                                            </div>
                                        </div>

                                    </div>

                                    <div className={s.gallery}>
                                        <div className={s.mainThumb}>
                                            <img src={el.image} alt={el.name} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>}
                </Container>
            </section>
        </>
    )
}

export default CartWrap