import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import s from './Dropdown.module.scss';

const Dropdown = ({
    options,
    defaultValue,
    label,
    onChange,
    className
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue || options[0]);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) {
            onChange(option);
        }
    };

    return (
        <div className={`${s.dropdownWrapper} ${className || ''}`} ref={dropdownRef}>
            {label && <span className={s.label}>{label}</span>}
            <div className={s.dropdown}>
                <button
                    className={s.toggle}
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                >
                    {selectedOption}
                    <IoMdArrowDropdown className={`${s.icon} ${isOpen ? s.iconRotated : ''}`} />
                </button>

                {isOpen && (
                    <div className={s.menu}>
                        {options.map((option) => (
                            <div
                                key={option}
                                className={`${s.item} ${option === selectedOption ? s.active : ''}`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;