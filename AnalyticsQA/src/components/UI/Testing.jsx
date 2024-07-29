import React from 'react';
import classes from '../../styles/Testing.module.css'
import ButtonSwitch from "./button/ButtonSwitch";

const Testing = () => {
    return (
        <div className={classes.testing}>
            <h2 className={classes.text}>Только ручное тестирование</h2>
            <ButtonSwitch/>
        </div>
    );
};

export default Testing;