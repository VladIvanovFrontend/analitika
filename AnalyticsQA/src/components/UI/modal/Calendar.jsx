import React, { useState } from 'react';
import './Calendar.css';

const Calendar = ({ onClose }) => {
    const today = new Date();
    const [selectedDates, setSelectedDates] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [showYearSelector, setShowYearSelector] = useState(false);
    const [selectedYears, setSelectedYears] = useState([]);

    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const handleDateClick = (day) => {
        if (selectedDates.length === 2) {
            setSelectedDates([day]);
        } else {
            setSelectedDates([...selectedDates, day].sort((a, b) => a - b));
        }
    };

    const handleYearClick = () => {
        setShowYearSelector(!showYearSelector);
    };

    const handleMonthChange = (increment) => {
        let newMonth = currentMonth + increment;
        let newYear = currentYear;

        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        } else if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }

        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const getDaysArray = () => {
        const numDays = daysInMonth(currentMonth, currentYear);
        return Array.from({ length: numDays }, (_, i) => i + 1);
    };

    const isDateSelected = (day) => {
        if (selectedDates.length === 0) return false;
        if (selectedDates.length === 1) return selectedDates[0] === day;
        return selectedDates[0] <= day && day <= selectedDates[1];
    };

    const isToday = (day) => {
        return (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        );
    };

    const handleYearSelect = (year) => {
        if (selectedYears.length === 2) {
            setSelectedYears([year]);
        } else {
            setSelectedYears([...selectedYears, year].sort((a, b) => a - b));
        }
    };

    const isYearSelected = (year) => {
        if (selectedYears.length === 0) return false;
        if (selectedYears.length === 1) return selectedYears[0] === year;
        return selectedYears[0] <= year && year <= selectedYears[1];
    };

    const handleDoneClick = () => {
        if (onClose) onClose();
    };

    const renderYearSelector = () => {
        const startYear = today.getFullYear() - 15;
        const endYear = today.getFullYear();
        const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

        return (
            <div className="year-selector">
                {years.map((year) => (
                    <div
                        key={year}
                        className={`year ${isYearSelected(year) ? "selected" : ""}
                            ${selectedYears.length === 2 && selectedYears[0] === year ? "start" : ""}
                            ${selectedYears.length === 2 && selectedYears[1] === year ? "end" : ""}`}
                        onClick={() => handleYearSelect(year)}
                    >
                        {year}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="calendar">
            <div className="header">
                <button className="nav-button" onClick={() => handleMonthChange(-1)}>
                    {"<"}
                </button>
                <div className="month-year" onClick={handleYearClick}>
                    {`${months[currentMonth]} ${currentYear}`}
                </div>
                <button className="nav-button" onClick={() => handleMonthChange(1)}>
                    {">"}
                </button>
            </div>
            {showYearSelector ? (
                renderYearSelector()
            ) : (
                <div className="days-grid">
                    {getDaysArray().map((day) => (
                        <div
                            key={day}
                            className={`day ${isDateSelected(day) ? "selected" : ""}
                                ${selectedDates.length === 2 && selectedDates[0] === day ? "start" : ""}
                                ${selectedDates.length === 2 && selectedDates[1] === day ? "end" : ""}
                                ${isToday(day) ? "today" : ""}`}
                            onClick={() => handleDateClick(day)}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            )}
            <hr/>
            <button className="done-button" onClick={handleDoneClick}>Готово</button>
        </div>
    );
};

export default Calendar;
