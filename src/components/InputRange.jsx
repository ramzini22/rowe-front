import React, {memo, useEffect, useState} from 'react';
import {Slider} from "@mui/material";
import useDebounce from "../hooks/useDebounce";

const InputRange = ({data, onChange}) => {

    const [minV, maxV] = data

    const [startValue, setStartValue] = useState(minV);
    const [endValue, setEndValue] = useState(maxV);

    const values = useDebounce([startValue, endValue], 200)

    useEffect(()=>{
        const [min, max] = values
        if(min!=0 && max!=0)
            onChange(values)
    }, [values])

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
                value={[startValue, endValue]}
                min={minV}
                max={maxV}
                classes={{thumb:'thumb', track:'track'}}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </div>
    );
};

export default memo(InputRange);