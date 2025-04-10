import React from 'react'
import s from './ProductCard.module.scss'
import Link from 'next/link'

const ProductCard = ({ id, image, name, price }) => {
    return (
        <Link href={`/product/${id}`} className={s.link}>
            <div className={s.card}>

                <img src={image} alt={name} />
                <h3>{name}</h3>
                <h4>$ {price}</h4>
            </div>
        </Link>
    )
}

export default ProductCard
