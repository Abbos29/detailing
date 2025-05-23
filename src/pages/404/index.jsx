import ErrorWrap from '@/components/ui/ErrorWrap/ErrorWrap'
import Seo from '@/components/ui/Seo/Seo'
import React from 'react'

const ErrorPage = () => {
    return (
        <>
            <Seo title="404 Error" />
            <ErrorWrap />
        </>
    )
}

export default ErrorPage