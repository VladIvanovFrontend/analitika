import React from 'react';
import classes from "../../../styles/Testing.module.css";
import useClickPosition from "../../../hooks/useClickPosition";

const ButtonSwitch = () => {
    const { position, handleClick } = useClickPosition();

    return (
        <button onClick={handleClick} className={classes.containerSwitch}>
            <div className={classes.buttonSwitch}>
                <div className={`${classes.switch} ${position === 0 ? classes.left : classes.right}`}
                ></div>
            </div>
        </button>
    );
};

export default ButtonSwitch;