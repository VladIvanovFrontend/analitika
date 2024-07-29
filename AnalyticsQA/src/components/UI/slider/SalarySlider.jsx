import React from 'react';
import classes from "./Slider.module.css";
import Slider from "./Slider";
import Button from "../button/Button";

const Experience = () => {
    return (
        <div>
                <Slider minValue={0} maxValue={10000} title={'ЗП'} step={100} value={'$'}/>
                    <h2 className={classes.text}>Показывать вакансии, в которых:</h2>
            <div className={classes.button}>
                <div className={classes.fixButton}>
                    <Button title={'Все'}/>
                    <Button title={'Указаны обе границы (от и до)'}/>
                </div>
                <div className={classes.mgnBtn}>
                    <Button title={'Указана только нижняя граница (от)'}/>
                </div>
                <div className={classes.fixButton}>
            <Button title={'Указана только верхняя граница (до)'}/>
            <Button title={'Валюта была угадана'}/>
                </div>
            </div>
        </div>
    );
};

export default Experience;