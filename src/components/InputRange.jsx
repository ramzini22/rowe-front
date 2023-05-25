import React, {memo, useEffect, useState} from 'react';
import {Slider} from "@mui/material";

const InputRange = ({data, onChange}) => {

    const [minV, maxV] = data

    const [startValue, setStartValue] = useState(minV);
    const [endValue, setEndValue] = useState(maxV);

    useEffect(() => {
        setStartValue(minV)
        setEndValue(maxV)
    }, [minV, maxV])

    const handleChange = (event, newValue) => {
        const [valueMin, valueMax] = newValue
        setStartValue(valueMin)
        setEndValue(valueMax)
    };
    return (
        <div className='range'>
            <div className='range-inputs mb-4'>
                <input type="number" placeholder='0' value={startValue} min={minV} max={maxV}
                       onChange={(e) => {
                           const value = e.target.value
                           setStartValue(value)
                       }}/>
                <input type="number" placeholder='0' value={endValue} min={minV} max={maxV}
                       onChange={(e) => setEndValue(e.target.value)} className='ms-3'/>
            </div>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={[startValue, endValue]}
                min={minV}
                max={maxV}
                classes={{thumb:'thumb', track:'track'}}
                onMouseUp={()=>onChange([startValue, endValue])}
                // onMouseUp={onChange([startValue, endValue])}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </div>
    );
};

export default memo(InputRange);