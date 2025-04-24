import Head from 'next/head'

const Seo = ({
    title,
    description,
    keywords,
    image,
    url,
}) => {
    const defaultTitle = 'ASM Rights Holder — Платформа для управления авторскими правами'
    const defaultDescription = 'Современная платформа для авторов, правообладателей и компаний: автоматизация авторских прав, договоры, защита и маркетплейс.'
    const defaultKeywords = 'авторские права, интеллектуальная собственность, регистрация прав, маркетплейс лицензий, ASM Rights Holder'
    const defaultImage = 'https://yourdomain.com/preview.jpg'
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
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo
