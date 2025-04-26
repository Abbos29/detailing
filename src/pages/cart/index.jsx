import CartWrap from '@/components/layout/CartWrap/CartWrap'
import PaymentWrap from '@/components/layout/PaymentWrap/PaymentWrap'
import Seo from '@/components/ui/Seo/Seo'
import React from 'react'

const Cart = () => {
    return (
        <>
            <Seo
                title="Cart"
                description="ASM platform for managing copyrights and licenses. Creating contracts, protecting property, rights marketplace."
            />
            <CartWrap />
            <PaymentWrap />
        </>
    )
}

export default Cart