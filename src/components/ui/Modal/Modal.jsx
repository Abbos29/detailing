import React, { useRef, useEffect } from 'react';
import s from './Modal.module.scss';
import { useAppContext } from '@/context/AppContext';

const Modal = () => {
    const { isModalOpen, closeModal } = useAppContext();
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    return (
        <div className={s.overlay}>
            <div className={s.modal} ref={modalRef}>
                <h2>FÅ <span>20% RABATT</span><br />PÅ FØRSTE KJØP!</h2>
                <p className={s.subtitle}>
                    Bli med på nyhetsbrevet og få eksklusive tilbud på e-post når du melder deg inn.
                </p>
                <input type="email" placeholder="Email" className={s.input} />
                <label className={s.checkbox}>
                    <input type="checkbox" />
                    <span>Jeg samtykker til nyhetsbrev og reklame fra Bilpleiekongen</span>
                </label>
                <p className={s.disclaimer}>
                    Ved å oppgi e-post og sende inn skjemaet, samtykker du i å motta markedsføring og/eller målrettet reklame fra Bilpleiekongen. Du kan når som helst trekke tilbake samtykket via lenken i e-postene.
                </p>
                <button className={s.button}>MELD MEG PÅ!</button>
            </div>
        </div>
    );
};

export default Modal;
