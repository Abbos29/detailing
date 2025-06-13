import React from 'react'
import s from './Benefits.module.scss'
import Container from '@/components/ui/Container/Container'
import Benefit from './Benefit'


const Benefits = ({ main_points, points }) => {
    return (
        <>
            <section className={s.benefits}>
                <Container>
                    <div className={s.wrapper}>

                        <div className={`${s.benefit} ${s.main}`}>
                            <div className={s.video}>
                                {/* <video src="" controls></video> */}
                                <img src={main_points[0]?.images[0]} alt="img" />
                            </div>

                            <div className={s.content}>
                                <h2>{main_points[0]?.title}</h2>
                                <h3>{main_points[0]?.short_description}</h3>
                                <h4>{main_points[0]?.long_description}</h4>
                                <div className={s.gallery}>
                                    <img src={main_points[0]?.images[1]} alt="galleri-bilde" />
                                    <img src={main_points[0]?.images[2]} alt="galleri-bilde" />
                                </div>
                            </div>
                        </div>

                        <div className={s.benefits_card}>
                            {points?.map((benefit) => (
                                <Benefit key={benefit?.id} {...benefit} />
                            ))}
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default Benefits
