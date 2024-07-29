import React from 'react';
import Button from "./button/Button";
import classes from '../../styles/OtherWords.module.css'
const OtherWords = () => {
    return (
        <div>
            <h2 className={classes.text}>Вакансия содержит слова</h2>
            <div className={classes.containerButton}>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </div>
        </div>
    );
};

export default OtherWords;