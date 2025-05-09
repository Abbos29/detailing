import React from 'react'
import s from './CategoryWrap.module.scss'
import Container from '../../ui/Container/Container'
import Link from 'next/link'

const CategoryWrap = ({ categories }) => {
    return (
        <>
            <section className={s.categoryWrap}>
                <Container>
                    <div className={s.wrapper}>
                        {categories?.map((el) => {
                            return (
                                <Link
                                    key={el?.id}
                                    href={{
                                        pathname: '/catalog',
                                        query: {
                                            brand: '',
                                            category: el?.id,
                                            ordering: '',
                                            search: '',
                                            page: 1
                                        }
                                    }}
                                >
                                    <div>
                                        <img src={el?.image} alt="" />
                                        <p>{el?.name}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default CategoryWrap