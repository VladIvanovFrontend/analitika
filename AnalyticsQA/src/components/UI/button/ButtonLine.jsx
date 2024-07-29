import React from 'react';
import classes from './ButtonLine.module.css'
import useClickColor from "../../../hooks/useClickColor";
import styles from "./ButtonLine.module.css";

const ButtonLine = (props) => {
    const button1 = useClickColor();
    const button2 = useClickColor();
    const button3 = useClickColor();

    return (
        <div className={classes.buttonLine}>
            <button onClick={button1.toggleColor} className={`${styles.button} ${button1.isClicked ? styles.clicked : ''}`}>
                <div className={classes.ellipseLine} style={{ background: 'rgba(151, 185, 255, 1)' }}></div>
                Линия 1
            </button>
            <button onClick={button2.toggleColor} className={`${styles.button} ${button2.isClicked ? styles.clicked : ''}`}>
                <div className={classes.ellipseLine} style={{ background: 'rgba(178, 142, 250, 1)' }}></div>
                Линия 2
            </button>
            <button onClick={button3.toggleColor} className={`${styles.button} ${button3.isClicked ? styles.clicked : ''}`}>
                <div className={classes.ellipseLine} style={{ background: 'rgba(219, 254, 1, 1)' }}></div>
                Линия 3
            </button>
        </div>
    );
};

export default ButtonLine;