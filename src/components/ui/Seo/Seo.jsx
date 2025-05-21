import Head from 'next/head'

const Seo = ({
    title,
    description,
    keywords,
    image,
    url,
}) => {
    const defaultTitle = 'ASM Rights Holder — Copyright Management Platform'
    const defaultDescription = 'A modern platform for authors, copyright holders and companies: automation of copyrights, contracts, protection and marketplace.'
    const defaultKeywords = 'copyright, intellectual property, rights registration, license marketplace, ASM Rights Holder'
    const defaultImage = '/logo.png'
    const defaultUrl = 'https://yourdomain.com/'

    return (
        <Head>
            <title>{title || defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="ASM Rights Holder" />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:url" content={url || defaultUrl} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />

            {/* Canonical */}
            <link rel="canonical" href={url || defaultUrl} />

            {/* Favicon */}
            {/* <link rel="icon" href="/favicon.ico" /> */}
            <link rel="icon" href="/logo.png" />
        </Head>
    )
}

export default Seo
