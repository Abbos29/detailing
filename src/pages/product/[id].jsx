import Benefits from '@/components/layout/Benefits/Benefits'
import ProductWrap from '@/components/layout/ProductWrap/ProductWrap'
import RandomCards from '@/components/layout/RandomCards/RandomCards'
import Seo from '@/components/ui/Seo/Seo'
import { axiosInstanceProducts } from '@/utils/axios_products'
import { axiosInstanceShared } from '@/utils/axios_shared'
import React from 'react'

const ProductPage = ({ products, singleProduct, main_points, points }) => {
  return (
    <>
      <Seo
        title={singleProduct?.name}
        description={singleProduct?.short_description}
      />
      <ProductWrap singleProduct={singleProduct} />
      <RandomCards products={products} />
      <Benefits main_points={main_points} points={points} />
    </>
  )
}

export async function getServerSideProps(context) {
  const productID = context.params.id;
  const { data: singleProduct } = await axiosInstanceProducts.get(`/products/${productID}/`);
  const { data: products } = await axiosInstanceProducts.get("/products")
  const { data: main_points } = await axiosInstanceShared.get("/main-points/")
  const { data: points } = await axiosInstanceShared.get("/points/")
  return {
    props: {
      singleProduct, products, points, main_points
    }
  };
}


export default ProductPage