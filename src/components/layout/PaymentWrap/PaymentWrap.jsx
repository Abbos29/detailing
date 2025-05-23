import React from 'react'
import s from './PaymentWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Button from '@/components/ui/Button/Button'
import { useCart } from 'react-use-cart'
import { useIsClient } from 'usehooks-ts'
import axios from 'axios'

const PaymentWrap = () => {
  const { cartTotal, emptyCart, items } = useCart()
  const isClient = useIsClient()

  const postTelegram = (e) => {
    e.preventDefault()
    axios.post(
      `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
        `<b>Details:</b>
        <b>Phone number: ${e.target[0].value}</b>
        <b>Name: ${e.target[1].value}</b>
        <b>Email: ${e.target[2].value}</b>
        <b>Address: ${e.target[3].value}</b>
        <b>Comment: ${e.target[4].value}</b>
${items
          .map((item) => {
            return `
<b>${item.name}</b>
${item.quantity} x ${item.price} $ = ${item.quantity} 
    `;
          })
          .join("")}        
<b>Total:</b> ${cartTotal} $`
      )}&parse_mode=html`
    )
      .then(() => {
        emptyCart()
        window.location.reload()
      })
  };
  return (
    <section className={s.paymentWrap}>
      <Container>
        {isClient && <div className={s.wrapper}>

          <div className={s.wrap}>
            <h3>Betaling</h3>
            <p>Velg din betalingsmetode</p>

            <div className={s.paymentMethods}>
              {[...Array(4)].map((_, index) => (
                <div key={index} className={s.paymentCard}>
                  <img src="/img/payment-icon.svg" alt="Betalingsmetode" />
                </div>
              ))}
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
                <h4>${cartTotal}</h4>
                <Button type="submit">Betal</Button>
              </div>
            </form>
          </div>

        </div>}
      </Container>
    </section>
  )
}

export default PaymentWrap
