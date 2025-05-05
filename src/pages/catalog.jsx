import CatalogBanner from '@/components/layout/CatalogWrap/CatalogBanner'
import CatalogWrap from '@/components/layout/CatalogWrap/CatalogWrap'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import Container from '@/components/ui/Container/Container'
import Seo from '@/components/ui/Seo/Seo'
import { axiosInstanceProducts } from '@/utils/axios_products'
import React from 'react'

export const getServerSideProps = async () => {
    const { data } = await axiosInstanceProducts.get("/products")
    const { data: categories } = await axiosInstanceProducts.get("/categories")
    const { data: brands } = await axiosInstanceProducts.get("/brands")

    return {
        props: {
            data,
            categories,
            brands
        }
    }
}

const catalog = ({ data, categories, brands }) => {
    return (
        <>
            <Seo
                title="Detailing"
                description="Платформа ASM для управления авторскими правами и лицензиями. Создание договоров, защита собственности, маркетплейс прав."
            />

            <Container>
                <Breadcrumbs />

                <CatalogBanner />

                <CatalogWrap categories={categories} brands={brands} data={data} />
            </Container>
        </>
    )
}

export default catalog