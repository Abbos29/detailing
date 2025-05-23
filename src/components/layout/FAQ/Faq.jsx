import React, { useState } from 'react'
import s from './Faq.module.scss'
import Container from '@/components/ui/Container/Container'

const faqData = [
    {
        question: "Hvilke typer bilpleieprodukter tilbyr dere?",
        answer: "Vi tilbyr et bredt utvalg av profesjonelle bilpleieprodukter — fra premium bilshampooer, voks og poleringsmidler til spesialiserte innvendige rengjøringsmidler, mikrofiberkluter og påføringsverktøy. Vårt sortiment er tilpasset både hobbyentusiaster og profesjonelle detailere.",
    },
    {
        question: "Hvilke fraktalternativer er tilgjengelige?",
        answer: "Vi tilbyr standard, ekspress og internasjonal frakt. Fraktkostnader og leveringstid varierer avhengig av din plassering og valgt fraktmetode.",
    },
    {
        question: "Hva er deres returpolicy?",
        answer: "Du kan returnere ubrukte produkter innen 30 dager etter kjøpet. Produktene må være i originalemballasjen. Refusjon utstedes når varen er mottatt og inspisert.",
    },
    {
        question: "Tilbyr dere opplæringsvideoer eller guider?",
        answer: "Ja, vi tilbyr detaljerte produktguider, videoer og trinnvise instruksjoner på nettsiden vår for å hjelpe deg med å få mest mulig ut av kjøpet ditt.",
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
                    <h1>Ofte stilte spørsmål</h1>
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
