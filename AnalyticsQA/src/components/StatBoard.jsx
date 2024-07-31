import React from 'react';
import classes from '../styles/StatBoard.module.css'
import CalendarButton from "./UI/button/calendarButton";
import Board from "./UI/board/Board";

const StatBoard = () => {
    return (
        <div className={classes.sttBrd}>
            <div className={classes.btn}>
                <CalendarButton/>
            </div>
            <div className={classes.Board}>
                <Board title={'Кол-во вакансий к ЗП'} values={[40, 30, 20, 10, 0]} pay={[1000, 2000, 3000, 4000, 5000]} />
                <Board title={'Кол-во вакансий за промежуток времени'} values={[200, 150, 100, 50, 0]} pay={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
            </div>
        </div>
    );
};

export default StatBoard;