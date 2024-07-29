import React from 'react';
import styles from './Button.module.css';
import useClickColor from "../../../hooks/useClickColor";

const Button = (props) => {
    const { isClicked, toggleColor } = useClickColor();

    return (
        <div className={styles.backBtn}>
            <button
                onClick={toggleColor}
                className={`${styles.button} ${isClicked ? styles.clicked : ''}`}
            >
                {props.title}
            </button>
        </div>
    );
};

export default Button;