import React from 'react'
import s from './Benefits.module.scss'
import Container from '@/components/ui/Container/Container'
import Benefit from './Benefit'

const benefitsData = [
    {
        id: 1,
        image: "/img/benefit1.png",
        title: "Utvendig Detailing",
        text: "Med over 10 års erfaring innen bilpleie er Nartek din pålitelige partner for førsteklasses bilpleie.",
        list: [
            "Håndvask og tørk",
            "Voksing og polering",
            "Lakkrens og fjerning av riper",
            "Dekkbehandling og oppfrisking av plastdetaljer"
        ],
        position: "right",
    },
    {
        id: 2,
        image: "/img/benefit2.png",
        title: "Innvendig Detailing",
        text: "Vårt team av dyktige fagfolk bruker moderne teknikker og miljøvennlige produkter for å beskytte og gjenopprette kjøretøyet ditt. Vi mener at hver detalj teller og at kvalitet bygger langvarige relasjoner.",
        list: [
            "Dyp rengjøring av tepper, seter og trekk",
            "Behandling av dashbord, konsoll og dørpaneler",
            "Fjerning av flekker og lukt"
        ],
        position: "left",
    },
    {
        id: 3,
        image: "/img/benefit3.png",
        title: "Spesialbehandlinger",
        text: "Gi bilen din nytt liv med profesjonell pleie og en finish som på utstillingsrom. Hos Sparkle & Shine gjør vi vårt ytterste for at bilen din skal se best mulig ut – både innvendig og utvendig.",
        list: [
            "Keramisk coating for langvarig glans og beskyttelse",
            "Mobil bilpleie: Vi kommer til deg",
            "Sesongpakker og medlemsrabatter"
        ],
        position: "right",
    },
];

const Benefits = () => {
    return (
        <>
            <section className={s.benefits}>
                <Container>
                    <div className={s.wrapper}>

                        <div className={`${s.benefit} ${s.main}`}>
                            <div className={s.video}>
                                {/* <video src="" controls></video> */}
                                <img src="/img/benefits-main-2.jpg" alt="img" />
                            </div>

                            <div className={s.content}>
                                <h2>Du kan stole på våre merkevarer – de representerer kvalitet og tillit.</h2>
                                <h3>Hos Nartek mener vi at design ikke bare handler om estetikk, men om å skape meningsfulle og bærekraftige rom.</h3>
                                <h4>Vi er forpliktet til å designe rom som balanserer eleganse, bærekraft og komfort. Vår visjon er å levere designløsninger som ikke bare ...</h4>
                                <div className={s.gallery}>
                                    <img src="/img/benefit-main-1.png" alt="galleri-bilde" />
                                    <img src="/img/benefit-main-2.png" alt="galleri-bilde" />
                                </div>
                            </div>
                        </div>

                        {benefitsData.map((benefit) => (
                            <Benefit key={benefit.id} {...benefit} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Benefits
