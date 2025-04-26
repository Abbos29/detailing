import React from 'react'
import s from './PaymentWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Button from '@/components/ui/Button/Button'

const PaymentWrap = () => {
  return (
    <section className={s.paymentWrap}>
      <Container>
        <div className={s.wrapper}>

          <div className={s.wrap}>
            <h3>Payment</h3>
            <p>Choose your payment method</p>

            <div className={s.paymentMethods}>
              {[...Array(4)].map((_, index) => (
                <div key={index} className={s.paymentCard}>
                  <img src="/img/payment-icon.svg" alt="Payment method" />
                </div>
              ))}
            </div>
          </div>

          <div className={s.wrap}>
            <form onSubmit={(e) => e.preventDefault()}>
              <h3>Add your address</h3>
              <div className={s.inputGroup}>
                <input type="text" placeholder="Phone number to contact with you" required />
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>

              <h3>Shipment</h3>
              <div className={s.inputGroup}>
                <input type="text" placeholder="Home address" required />
                <input type="text" placeholder="Add comment (optional)" />
              </div>

              <div className={s.total}>
                <h4>360.90$</h4>
                <Button type="submit">Pay</Button>
              </div>
            </form>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default PaymentWrap
