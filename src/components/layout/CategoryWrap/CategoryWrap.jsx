import React from 'react'
import s from './CategoryWrap.module.scss'
import Container from '../../ui/Container/Container'
import Link from 'next/link'

const CategoryWrap = () => {
    return (
        <>
            <section className={s.categoryWrap}>
                <Container>
                    <div className={s.wrapper}>
                        <Link href={`/`}>
                            <div>
                                <img src="/brand_5.png" alt="" />
                                <p>text</p>
                            </div>
                        </Link>
                        <Link href={`/`}>
                            <div>
                                <img src="/brand_5.png" alt="" />
                                <p>text</p>
                            </div>
                        </Link>
                        <Link href={`/`}>
                            <div>
                                <img src="/brand_5.png" alt="" />
                                <p>text</p>
                            </div>
                        </Link>
                        <Link href={`/`}>
                            <div>
                                <img src="/brand_5.png" alt="" />
                                <p>text</p>
                            </div>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default CategoryWrap