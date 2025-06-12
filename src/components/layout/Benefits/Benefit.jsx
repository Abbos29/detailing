import React from "react";
import s from "./Benefits.module.scss";

const Benefit = ({ main_image, title, description, position, tags }) => {
    return (
        <div className={`${s.benefit} ${s[position]}`}>
            <div className={s.image}>
                <img src={main_image} alt={title} />
            </div>

            <div className={s.content}>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                    {tags?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Benefit;
