import React, { useState } from 'react';
import classes from "./Slider.module.css";

const ExperienceSlider = (props) => {
    const [minValue, setMinValue] = useState(props.minValue);
    const [maxValue, setMaxValue] = useState(props.maxValue);

    const handleMinChange = (event) => {
        const value = Math.min(Number(event.target.value), maxValue - props.step);
        setMinValue(value);
    };

    const handleMaxChange = (event) => {
        const value = Math.max(Number(event.target.value), minValue + props.step);
        setMaxValue(value);
    };

    return (
        <div className={classes.expSlider}>
            <label className={classes.label}>
                <h2 className={classes.textTitle}>{props.title}</h2>
                <h2 className={classes.textYear}>от {minValue} до {maxValue} {props.value}</h2>
            </label>
            <div className={classes.sliderContainer}>
                <input
                    type="range"
                    min={props.minValue}
                    max={props.maxValue}
                    step= {props.step}
                    value={minValue}
                    onChange={handleMinChange}
                    className={classes.slider}
                />
                <input
                    type="range"
                    min={props.minValue}
                    max={props.maxValue}
                    step= {props.step}
                    value={maxValue}
                    onChange={handleMaxChange}
                    className={classes.slider}
                />
                <div className={classes.sliderTrack}>
                    <div
                        className={classes.sliderRange}
                        style={{
                            left: `${(minValue / props.maxValue) * 100}%`,
                            right: `${100 - (maxValue / props.maxValue) * 100}%`
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExperienceSlider;