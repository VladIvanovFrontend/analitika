import React from 'react';
import classes from './Calendar.module.css';

const Calendar = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();

    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    let monthName = months[month];
    let previousMonthIndex = (month === 0) ? 11 : month - 1;
    let previousMonthName = months[previousMonthIndex];
    let previousYear = year - 1;

    return (
        <div className={classes.calendarContainer}>
            <div style={{ marginTop: '2px' }} className={classes.textDate}>Текущий год: {year}</div>
            <div className={classes.textDate}>{monthName}</div>
            <div className={classes.textDate}>Прошлый месяц: {previousMonthName}</div>
            <div className={classes.textDate}>3 месяца</div>
            <div className={classes.textDate}>Полгода</div>
            <div className={classes.textDate}>{previousYear} год</div>
            <div className={classes.textDate}>{previousYear - 1} год</div>
            <div className={classes.textDate}>За все время</div>
            <hr className={classes.hr} />
            <div className={classes.textDate}>Указать период...</div>
        </div>
    );
};

export default Calendar;