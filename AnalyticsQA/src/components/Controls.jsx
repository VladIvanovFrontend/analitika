import React from 'react';
import ButtonLine from "./UI/button/ButtonLine";
import Grade from "./UI/Grade";
import ExperienceSlider from "./UI/slider/ExperienceSlider";
import SalarySlider from "./UI/slider/SalarySlider";
import Testing from "./UI/Testing";
import Place from "./UI/Place";
import OtherWords from "./UI/ OtherWords";
import classes from '../styles/Controls.module.css'

const Controls = () => {
    return (
        <div className={classes.controls}>
            <ButtonLine/>
            <Grade/>
            <ExperienceSlider/>
            <SalarySlider/>
            <Testing/>
            <Place/>
            <OtherWords/>
        </div>
    );
};

export default Controls;