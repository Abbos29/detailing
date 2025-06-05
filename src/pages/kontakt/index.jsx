import ContactForm from '@/components/layout/ContactForm/ContactForm'
import ContactWrap from '@/components/layout/ContactWrap/ContactWrap'
import Seo from '@/components/ui/Seo/Seo'
import { axiosInstanceShared } from '@/utils/axios_shared'
import React from 'react'

export const getServerSideProps = async () => {
    const { data } = await axiosInstanceShared.get('/contacts/')
    return { props: { data } }
}

const contact = ({data}) => {
    return (
        <>
            <Seo />

            <ContactWrap data={data} />

            <ContactForm />
        </>
    )
}

export default contact