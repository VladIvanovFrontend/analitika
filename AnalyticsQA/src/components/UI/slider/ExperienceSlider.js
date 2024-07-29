import React from 'react';
import classes from "./ExperienceSlider.css";
import Slider from "./Slider";

const Experience = () => {
    return (
        <div className={classes.experience}>
            <div>
                <Slider minValue={0} maxValue={6} title={'Опыт'} step={0.5} value={'лет'}/>
            </div>
        </div>
    );
};

export default Experience;