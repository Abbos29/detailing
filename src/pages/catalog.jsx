import CatalogBanner from '@/components/layout/CatalogWrap/CatalogBanner'
import CatalogWrap from '@/components/layout/CatalogWrap/CatalogWrap'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import Container from '@/components/ui/Container/Container'
import Seo from '@/components/ui/Seo/Seo'
import React from 'react'

const catalog = () => {
    return (
        <>
            <Seo
                title="Detailing"
                description="Платформа ASM для управления авторскими правами и лицензиями. Создание договоров, защита собственности, маркетплейс прав."
            />

            <Container>
                <Breadcrumbs />

                <CatalogBanner />

                <CatalogWrap />
            </Container>
        </>
    )
}

export default catalog