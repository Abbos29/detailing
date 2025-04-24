import React from 'react'
import s from './ProductCard.module.scss'
import Link from 'next/link'

const ProductCard = ({ id, image, name, price, view }) => {
    return (
        <Link href={`/product/${id}`} className={s.link}>
            <div className={`${s.card} ${view === 'list' ? s.horizontal : ''}`}>
                <img src={image} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
