import CategoryWrap from '@/components/layout/CategoryWrap/CategoryWrap'
import ContactForm from '@/components/layout/ContactForm/ContactForm'
import Seo from '@/components/ui/Seo/Seo'
import { axiosInstanceProducts } from '@/utils/axios_products'
import React from 'react'

export const getServerSideProps = async () => {
    const { data: categories } = await axiosInstanceProducts.get("/categories")
    return {
        props: {
            categories
        }
    }
}

const category = ({ categories }) => {
    return (
        <>
            <Seo />
            <CategoryWrap categories={categories} />
            <ContactForm />

        </>
    )
}

export default category