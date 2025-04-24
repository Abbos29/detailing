import React from 'react'
import s from './ErrorWrap.module.scss'
import Container from '../Container/Container'
import Link from 'next/link'

const ErrorWrap = () => {
    return (
        <>
            <section className={s.errorwrap}>
                <Container>
                    <div className={s.wrapper}>
                        <h1 className={s.title}>404</h1>
                        <p className={s.text}>Page not found</p>
                        <Link href="/" className={s.link}>Back to home</Link>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ErrorWrap