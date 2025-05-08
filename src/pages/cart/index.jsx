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
            <Seo
                title="Cart"
                description="ASM platform for managing copyrights and licenses. Creating contracts, protecting property, rights marketplace."
            />
            {isClient && !isEmpty ? (
                <>
                    <CartWrap />
                    <PaymentWrap />
                </>
            ) : (
                <div className="empty_cart">
                    <img src="/img/empty.webp" alt="" />
                    <Link href={'/catalog'}>Comeback to Catalog</Link>
                </div>
            )}
        </>
    )
}

export default Cart