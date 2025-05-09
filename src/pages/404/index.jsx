import ErrorWrap from '@/components/ui/ErrorWrap/ErrorWrap'
import Seo from '@/components/ui/Seo/Seo'
import React from 'react'

const ErrorPage = () => {
    return (
        <>
            <Seo
                title="404 Error"
                description="ASM platform for managing copyrights and licenses. Creating contracts, protecting property, rights marketplace."
            />
            <ErrorWrap />
        </>
    )
}

export default ErrorPage