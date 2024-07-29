import React from 'react';
import Button from "./button/Button";
import classes from '../../styles/Place.module.css'

const Place = () => {
    return (
        <div>
            <h2 className={classes.text}>Место работы</h2>
            <div className={classes.placeButton}>
                <Button title={'Не важно'}/>
                <Button title={'Офис'}/>
                <Button title={'Удаленка'}/>
                <Button title={'Гибрид'}/>
                <Button title={'Релокация'}/>
            </div>
        </div>
    );
};

export default Place;