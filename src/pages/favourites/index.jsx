import FavouritesWrap from '@/components/layout/FavouritesWrap/FavouritesWrap'
import Seo from '@/components/ui/Seo/Seo'
import { useAppContext } from '@/context/AppContext';
import React from 'react'
import { useIsClient } from 'usehooks-ts';

const FavouritesPage = () => {
    const { fav } = useAppContext();
    const isClient = useIsClient()
    return (
        <>
            <Seo />
            {isClient && <FavouritesWrap fav={fav} />}
        </>
    )
}

export default FavouritesPage