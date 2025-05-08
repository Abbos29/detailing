import AboutWrap from '@/components/layout/AboutWrap/AboutWrap'
import { axiosInstanceProducts } from '@/utils/axios_products'
import React from 'react'


export const getServerSideProps = async () => {
    const { data: brands } = await axiosInstanceProducts.get("/brands")
    return {
        props: {
            brands
        }
    }
}

const about = ({ brands }) => {
    return (
        <>
            <AboutWrap brands={brands} />
        </>
    )
}

export default about