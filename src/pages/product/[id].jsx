import Benefits from '@/components/layout/Benefits/Benefits'
import ProductWrap from '@/components/layout/ProductWrap/ProductWrap'
import RandomCards from '@/components/layout/RandomCards/RandomCards'
import Seo from '@/components/ui/Seo/Seo'
import React from 'react'

const ProductPage = () => {
  return (
    <>
      <Seo
        title="Detailing Product"
        description="ASM platform for managing copyrights and licenses. Creating contracts, protecting property, rights marketplace."
      />
      <ProductWrap />
      <RandomCards />
      <Benefits />


    </>
  )
}

export default ProductPage