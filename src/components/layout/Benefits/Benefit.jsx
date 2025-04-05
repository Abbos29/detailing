import React from "react";
import s from "./Benefits.module.scss";

const Benefit = ({ image, title, text, list, position }) => {
    return (
        <div className={`${s.benefit} ${s[position]}`}>
            <div className={s.image}>
                <img src={image} alt={title} />
            </div>

            <div className={s.content}>
                <h2>{title}</h2>
                <p>{text}</p>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Benefit;
