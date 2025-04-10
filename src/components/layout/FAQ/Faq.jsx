import React, { useState } from 'react'
import s from './Faq.module.scss'
import Container from '@/components/ui/Container/Container'

const faqData = [
    {
        question: "What types of detailing products do you offer?",
        answer: "We offer a wide range of professional auto detailing products — from premium car shampoos, waxes, and polishes to specialized interior cleaners, microfiber towels, and application tools. Our catalog is designed to cater to both DIY enthusiasts and professional detailers.",
    },
    {
        question: "What shipping options are available?",
        answer: "We offer standard, express, and international shipping options. Shipping costs and delivery times vary based on your location and selected method.",
    },
    {
        question: "What is your return policy?",
        answer: "You can return unused products within 30 days of purchase. Products must be in their original packaging. Refunds are issued once the item is received and inspected.",
    },
    {
        question: "Do you offer product tutorials or guides?",
        answer: "Yes, we provide detailed product tutorials, videos, and step-by-step guides on our website to help you get the most out of your purchase.",
    },
]

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className={s.faq}>
            <Container>
                <div className={s.wrapper}>
                    <h1>Discover frequently asked questions</h1>
                    <div className={s.list}>
                        {faqData.map((item, index) => (
                            <div key={index} className={s.item}>
                                <h3 onClick={() => toggle(index)}>
                                    {item.question}
                                    <span className={s.arrow}>
                                        {activeIndex === index ? '▾' : '▸'}
                                    </span>
                                </h3>
                                {activeIndex === index && <p>{item.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Faq
