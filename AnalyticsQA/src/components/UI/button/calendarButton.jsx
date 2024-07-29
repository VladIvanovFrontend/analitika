import React, { useState, useRef, useEffect } from 'react';
import classes from './CalendarButton.module.css';
import Calendar from "../modal/Calendar";

const CalendarButton = () => {
    const [modalActive, setModalActive] = useState(false);
    const modalRef = useRef(null);

    // Функция для обработки кликов вне модального окна
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalActive(false);
        }
    };

    // Добавляем и удаляем обработчик кликов при монтировании и размонтировании компонента
    useEffect(() => {
        if (modalActive) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalActive]);git init

    return (
        <div className={classes.calendarController}>
            <button className={classes.prevMonth}>
                <div className={classes.nav}>&lt;</div>
            </button>
            <button className={classes.openCalendar} onClick={() => setModalActive(!modalActive)}>

            </button>
            <button className={classes.nextMonth}>
                <div className={classes.nav} style={{ transform: 'rotate(180deg)' }}>&lt;</div>
            </button>
            {modalActive && (
                <div className={classes.modal} ref={modalRef}>
                    <Calendar className={classes.modalContent} />
                </div>
            )}
        </div>
    );
};

export default CalendarButton;