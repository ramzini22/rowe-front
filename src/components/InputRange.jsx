import React, {memo, useEffect, useRef, useState} from 'react';

const InputRange = ({data, onChange}) => {

    const [minV, maxV] = data
    // const minV=100, maxV=200

    const ref = useRef();
    const ref1 = useRef();

    const [startValue, setStartValue] = useState(minV);
    const [endValue, setEndValue] = useState(maxV);


    const procent=(maxV-minV)/100
    let minProcent = procent!=0?(startValue-minV)/procent:0
    let maxProcent =procent!=0?(endValue-minV)/procent:100

    if(minProcent>maxProcent){
        const t=maxProcent
        maxProcent=minProcent
        minProcent=t
    }

    const letfProcent = (minProcent>=0?minProcent<=100?minProcent:100:0)
    const rightProcent = (maxProcent<=100?maxProcent>=0?maxProcent:0:100)

    let style1 = {
        left:  letfProcent+ '%',
    }
    let style2 = {
        left: rightProcent + '%',
    }

    useEffect(()=>{
        setStartValue(minV)
        setEndValue(maxV)
    }, [minV, maxV])

    useEffect(()=>{
        const down = startValue>=minV?startValue:minV
        const top = endValue<=maxV?endValue:maxV
        if(down!=top && top!=0)
            onChange([down, top])
    }, [startValue, endValue])

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

            <div ref={ref} className="range-slider">
                <div className="range-slider-rail">
                    <div className="min">{minV}</div>
                    <div className="max">{maxV}</div>
                </div>
                <div className="range-slider-track" style={{left:style1.left, width:rightProcent-letfProcent+'%'}}></div>
                <div
                    ref={ref1}
                    className="range-slider-handle-1"
                    style={style1}
                >
                </div>
                <div
                    className="range-slider-handle-2"
                    style={style2}
                >
                </div>
            </div>
        </div>
    );
};

export default memo(InputRange);