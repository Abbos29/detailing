import Head from 'next/head'

const Seo = ({
    title,
    description,
    keywords,
    image,
    url,
}) => {
    const defaultTitle = 'Nartek - Kreative løsninger for din bedrift';
    const defaultDescription = 'Nartek tilbyr profesjonelle tjenester innen webdesign, merkevarebygging og digital markedsføring. Vi hjelper bedrifter å vokse med kreative, effektive og moderne løsninger.';
    const defaultKeywords = 'webdesign, merkevarebygging, digital markedsføring, kreative løsninger, norske bedrifter, UX, UI, e-handel, utvikling';
    const defaultImage = '/img/nartek-favicon.png';
    const defaultUrl = 'https://nartek.no/';

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
            <meta property="og:site_name" content="" />
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
            <link rel="icon" href="/img/nartek-favicon.png" />
        </Head>
    )
}

export default Seo
