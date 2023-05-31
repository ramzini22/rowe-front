import React, {memo, useEffect, useState} from 'react';
import {Slider} from "@mui/material";
import useDebounce from "../hooks/useDebounce";

const InputRange = ({data, onChange}) => {

    const [minV, maxV] = data
    const [stopSearch, setStopSearch] = useState(true)
    const [startValue, setStartValue] = useState();
    const [endValue, setEndValue] = useState();

    const values = useDebounce([startValue, endValue], 200)

    useEffect(()=>{
        const [min, max] = values
        if(min!=0 && max!=0){
            if(!stopSearch)
                onChange(values)
            else
                setStopSearch(false)
        }
    }, [values])

    useEffect(() => {
        setStartValue(minV)
        setEndValue(maxV)

        setStopSearch(true)
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
                       onChange={(e) => setStartValue(e.target.value)}/>
                <input type="number" className='ms-3' placeholder='0' value={endValue} min={minV} max={maxV}
                       onChange={(e) => setEndValue(e.target.value)}/>
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

export default InputRange;