import CartWrap from '@/components/layout/CartWrap/CartWrap'
import PaymentWrap from '@/components/layout/PaymentWrap/PaymentWrap'
import Seo from '@/components/ui/Seo/Seo'
import Link from 'next/link'
import React from 'react'
import { useCart } from 'react-use-cart'
import { useIsClient } from 'usehooks-ts'

const Cart = () => {
    const isClient = useIsClient()
    const { isEmpty } = useCart()
    return (
        <>
            <Seo />
            {isClient && !isEmpty ? (
                <>
                    <CartWrap />
                    <PaymentWrap />
                </>
            ) : (
                <div className="empty_cart">
                    <img src="/img/empty.webp" alt="Tom handlekurv" />
                    <Link href={'/catalog'}>Gå tilbake til katalogen</Link>
                </div>
            )}
        </>
    )
}

export default Cart
