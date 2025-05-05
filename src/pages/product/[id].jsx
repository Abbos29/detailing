import Benefits from '@/components/layout/Benefits/Benefits'
import ProductWrap from '@/components/layout/ProductWrap/ProductWrap'
import RandomCards from '@/components/layout/RandomCards/RandomCards'
import Seo from '@/components/ui/Seo/Seo'
import { axiosInstanceProducts } from '@/utils/axios_products'
import React from 'react'

const ProductPage = ({ products, singleProduct, productImages }) => {
  return (
    <>
      <Seo
        title={singleProduct?.name}
        description={singleProduct?.short_description}
      />
      <ProductWrap singleProduct={singleProduct} productImages={productImages} />
      <RandomCards products={products} />
      <Benefits />
    </>
  )
}

export async function getServerSideProps(context) {
  const productID = context.params.id;
  const { data: singleProduct } = await axiosInstanceProducts.get(`/products/${productID}`);
  const { data: products } = await axiosInstanceProducts.get("/products")
  const { data: productImages } = await axiosInstanceProducts.get("/products/images")

  return { props: { singleProduct, products, productImages } };
}


export default ProductPage