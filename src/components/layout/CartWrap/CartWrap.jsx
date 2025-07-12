import React, { useState, useMemo } from 'react';
import s from './CartWrap.module.scss';
import Container from '@/components/ui/Container/Container';
import { useIsClient } from 'usehooks-ts';
import { useCart } from 'react-use-cart';
import { FaRegTrashAlt } from 'react-icons/fa';

const CartWrap = () => {
    const isClient = useIsClient();
    const { items, updateItemQuantity, removeItem } = useCart();

    const mvaPercent = 25; // 25% MVA (типично в Норвегии)
    const [promoCode, setPromoCode] = useState('');

    const totalPrice = useMemo(() => {
        return items.reduce((sum, el) => sum + el.price * el.quantity, 0);
    }, [items]);

    const mvaAmount = useMemo(() => {
        return (totalPrice * mvaPercent) / (100 + mvaPercent); // извлекаем НДС из общей суммы
    }, [totalPrice, mvaPercent]);

    return (
        <section className={s.cartWrap}>
            <Container>
                {isClient && (
                    <div className={s.wrap}>
                        <div className={s.leftSide}>
                            {items.map((el) => {
                                const priceCount = el.quantity * el.price;
                                return (
                                    <div className={s.wrapper} key={el.id}>
                                        <div className={s.info}>
                                            <div className={s.meta}>
                                                <p>Vare: <span>#PNS-G1301</span></p>
                                                <p>Produsentdel: <span>#G1301</span></p>
                                            </div>
                                            <h1 className={s.title}>{el.name}</h1>
                                            <div className={s.controls}>
                                                <div className={s.counter}>
                                                    <button onClick={() => updateItemQuantity(el.id, el.quantity + 1)}>+</button>
                                                    <span>{el.quantity}</span>
                                                    <button onClick={() => updateItemQuantity(el.id, el.quantity - 1)}>-</button>
                                                </div>
                                            </div>
                                            <p className={s.shipping}>Frakt: <span>Sendes vanligvis samme dag eller neste virkedag</span></p>
                                            <div className={s.meta}>
                                                <p>Merkenavn: <span>NARPPF</span></p>
                                            </div>
                                            <div className={s.price}>{priceCount} kr</div>
                                            <div className={s.controls}>
                                                <div onClick={() => removeItem(el.id)} className={s.delete_btn}>
                                                    <div className={s.trash}>
                                                        <FaRegTrashAlt className={s.icon} />
                                                    </div>
                                                    Slett
                                                </div>
                                            </div>
                                        </div>
                                        <div className={s.gallery}>
                                            <div className={s.mainThumb}>
                                                <img src={el.image} alt={el.name} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    
                    </div>
                )}
            </Container>
        </section>
    );
};

export default CartWrap;
