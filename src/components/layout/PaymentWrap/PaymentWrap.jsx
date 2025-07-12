import React, { useState, useMemo } from 'react';
import s from './PaymentWrap.module.scss';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import { useCart } from 'react-use-cart';
import { useIsClient } from 'usehooks-ts';
import axios from 'axios';

const PaymentWrap = () => {
  const { cartTotal, emptyCart, items } = useCart();
  const isClient = useIsClient();
  const [promoCode, setPromoCode] = useState('');
  const mvaPercent = 25;

  const mvaAmount = useMemo(() => {
    return (cartTotal * mvaPercent) / (100 + mvaPercent);
  }, [cartTotal, mvaPercent]);

  const postTelegram = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://api.telegram.org/bot<token>/sendMessage?chat_id=<chat_id>&text=${encodeURIComponent(
          `<b>Details:</b>
<b>Phone number:</b> ${e.target[0].value}
<b>Name:</b> ${e.target[1].value}
<b>Email:</b> ${e.target[2].value}
<b>Address:</b> ${e.target[3].value}
<b>Comment:</b> ${e.target[4].value}
${items.map((item) => `${item.name} (${item.quantity} x ${item.price} kr)`).join('\n')}
<b>Total:</b> ${cartTotal} kr`
        )}&parse_mode=html`
      )
      .then(() => {
        emptyCart();
        window.location.reload();
      });
  };

  return (
    <section className={s.paymentWrap}>
      <Container>
        {isClient && (
          <div className={s.wrapper}>
            <div className={s.left}>
              <div className={s.wrap}>
                <h3>Betaling</h3>
                <p>Velg din betalingsmetode</p>

                <div className={s.paymentMethods}>
                  <div className={s.paymentCard}>
                    <img src="/img/payment-icon.svg" alt="Betalingsmetode" />
                  </div>
                  <div className={s.paymentCard}>
                    <img src="/img/klarna-icon.png" alt="Betalingsmetode" />
                  </div>
                  <div className={s.paymentCard}>
                    <img src="/img/paypal-icon.png" alt="Betalingsmetode" />
                  </div>
                </div>
              </div>

              <div className={s.wrap}>
                <form onSubmit={postTelegram}>
                  <h3>Legg til din adresse</h3>
                  <div className={s.inputGroup}>
                    <input type="text" placeholder="Telefonnummer for kontakt" required />
                    <input type="text" placeholder="Navn" required />
                    <input type="email" placeholder="E-post" required />
                  </div>

                  <h3>Frakt</h3>
                  <div className={s.inputGroup}>
                    <input type="text" placeholder="Hjemmeadresse" required />
                    <input type="text" placeholder="Legg til kommentar (valgfritt)" />
                  </div>

                  <div className={s.total}>
                    <h4>{cartTotal} kr</h4>
                    <Button type="submit">Betal</Button>
                  </div>
                </form>
              </div>
            </div>

            <div className={s.summary}>
              <h3>Sammendrag</h3>
              <label>Har du rabattkode?</label>
              <div className={s.promo}>
                <input
                  type="text"
                  placeholder="Skriv inn rabattkoden"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button>Legg til</button>
              </div>

              <div className={s.totalBlock}>
                <div className={s.line}>
                  <span>Sum ink. MVA</span>
                  <span>{cartTotal.toFixed(0)},-</span>
                </div>
                <div className={s.line}>
                  <span>Hvorav MVA</span>
                  <span>{mvaAmount.toFixed(0)},-</span>
                </div>
              </div>

              <button className={s.checkout}>Gå til kassen</button>
              <button className={s.continue}>Fortsett å handle</button>

              <ul className={s.benefits}>
                <li>Fri frakt over kr. 1499,-</li>
                <li>Rask levering</li>
                <li>Eksperter på norske forhold</li>
                <li>60 dager åpent kjøpt</li>
              </ul>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default PaymentWrap;
