import ContactWrap from '@/components/layout/ContactWrap/ContactWrap'
import Seo from '@/components/ui/Seo/Seo'
import React from 'react'

const contact = () => {
    return (
        <>
            <Seo
                title="Contact"
                description="ASM platform for managing copyrights and licenses. Creating contracts, protecting property, rights marketplace."
            />

            <ContactWrap />
        </>
    )
}

export default contact