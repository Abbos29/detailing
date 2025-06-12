import React, { useState } from 'react'
import s from './Faq.module.scss'
import Container from '@/components/ui/Container/Container'

const Faq = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className={s.faq}>
            <Container>
                <div className={s.wrapper}>
                    <h1>Ofte stilte spørsmål</h1>
                    <div className={s.list}>
                        {faqs?.map((item, index) => (
                            <div key={item?.id} className={s.item}>
                                <h3 onClick={() => toggle(index)}>
                                    {item?.question}
                                    <span className={s.arrow}>
                                        {activeIndex === index ? '▾' : '▸'}
                                    </span>
                                </h3>
                                {activeIndex === index && <p>{item?.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Faq
