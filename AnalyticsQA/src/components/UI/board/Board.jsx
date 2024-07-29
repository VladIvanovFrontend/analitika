import React from 'react';
import classes from './Board.module.css';

const Board = (props) => {
    const { title, values, pay } = props;

    return (
        <div className={classes.board}>
            <div>
                <h2 className={classes.title}>{title}</h2>
                <div className={classes.stat}>
                    <div className={classes.table}>
                        {values.map((value, index) => (
                            <h3 key={index} className={classes.text}>
                                {value}
                                <div className={classes.separator}></div>
                            </h3>
                        ))}
                    </div>
                </div>
                <div className={classes.backtbl}>
                    {pay.map((value, index) => (
                        <h3 key={index} className={classes.value}>
                            {value}
                        </h3>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Board;