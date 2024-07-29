import React from 'react';
import classes from './Button.module.css'
import Button from "./Button";

const ButtonGrade = () => {
    return (
        <div className={classes.backBtn}>
            <Button title={'Все'}/>
            <Button title={'Junior'}/>
            <Button title={'Middle'}/>
            <Button title={'Senior'}/>
        </div>
    );
};

export default ButtonGrade;