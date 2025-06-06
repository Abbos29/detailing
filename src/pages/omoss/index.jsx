import AboutWrap from '@/components/layout/AboutWrap/AboutWrap'
import Seo from '@/components/ui/Seo/Seo'
import { axiosInstanceProducts } from '@/utils/axios_products'
import { axiosInstanceShared } from '@/utils/axios_shared'
import React from 'react'


export const getServerSideProps = async () => {
    const { data: brands } = await axiosInstanceProducts.get("/brands")
    const { data: about_us } = await axiosInstanceShared.get("/about-us")
    return {
        props: {
            brands, about_us
        }
    }
}

const about = ({ brands, about_us }) => {
    return (
        <>
            <Seo title={'Om oss'} />

            <AboutWrap brands={brands} about_us={about_us} />
        </>
    )
}

export default about