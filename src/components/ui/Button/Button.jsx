import React from 'react'
import s from './Button.module.scss'

const Button = ({ children }) => {
    return (
        <>
            <button className={s.btn}>
                {children}
            </button>
        </>
    )
}

export default Button