import React from 'react';
import classes from "../../styles/Grade.module.css";
import ButtonGrade from "./button/ButtonGrade";

const Grade = () => {
    return (
        <div className={classes.grade}>
            <h2 className={classes.text}>Грейд</h2>
            <ButtonGrade/>
        </div>
    );
};

export default Grade;