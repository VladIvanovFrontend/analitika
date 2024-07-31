import React, { useState } from 'react';
import classes from './CalendarButton.module.css';
import Modal from "../modal/Modal";
import DateList from "../modal/DateList";
import Calendar from "../modal/Calendar";

const CalendarButton = () => {
    const [modalActive, setModalActive] = useState(false);

    const toggleModal = () => {
        setModalActive(prev => !prev);
    };

    return (
        <div className={classes.calendarController}>
            <button className={classes.prevMonth}>
                <div className={classes.nav}>&lt;</div>
            </button>
            <button className={classes.openCalendar} onClick={toggleModal}>
            </button>
            <button className={classes.nextMonth}>
                <div className={classes.nav} style={{ transform: 'rotate(180deg)' }}>&lt;</div>
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <DateList />
            </Modal>
        </div>
    );
};

export default CalendarButton;