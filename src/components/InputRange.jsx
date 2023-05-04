import React, {memo, useEffect, useRef, useState} from 'react';

const InputRange = ({data, onChange}) => {

    const [minV, maxV] = data

    const ref = useRef();
    const ref1 = useRef();

    const [startValue, setStartValue] = useState(minV);
    const [endValue, setEndValue] = useState(maxV);


    const procent=(maxV-minV)/100
    const minProcent = (startValue-minV)/(procent!=0?procent:1)
    const maxProcent =minV!=maxV?(endValue-minV)/(procent!=0?procent:1):100

    const letfProcent = (minProcent>=0 && minProcent<=maxProcent?minProcent:0)
    const rightProcent = (maxProcent<=100 && minProcent<=maxProcent?maxProcent:100)

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
        if(startValue>=minV && endValue<=maxV && startValue<=endValue)
        onChange([startValue, endValue])
    }, [startValue, endValue])

    const handleVal1 = (e) => {
        e.preventDefault();
        let startPoint = e.target.offsetLeft; // позиция первого тумблера относительно диапазона
        let startPointC = e.target.clientX;
        console.log('startPoint=' + startPoint);
        const parentW = e.target.offsetParent.offsetWidth;
        console.log('parentW=' + parentW);

        if (e.type === "mousedown") {
            console.log('MouseDownCapture');
            // document.addEventListener("mousemove", listener);
        } else if (e.type === "mouseup") {
            console.log('MouseUpCapture');
            document.onmousemove = null;
            e.target.onmouseup = null;
        } else {
            return;
        }
    }

    const handleVal2 = (e) => {
        let endPoint = e.target.offsetLeft;
        console.log('startPoint=' + endPoint);
    }

    return (
        <div className='range'>
            <div className='range-inputs mb-4'>
                <input type="number" placeholder='0' value={startValue} min={minV} max={maxV}
                       onChange={(e) => {
                           const value = e.target.value
                           // if(value>=minV)
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
                    onMouseDownCapture={(e) => handleVal1(e)}
                    onMouseUp={(e) => handleVal1(e)}>
                </div>
                <div
                    className="range-slider-handle-2"
                    style={style2}
                    onMouseDownCapture={(e) => handleVal2(e)}>
                </div>
            </div>
        </div>
    );
};

export default memo(InputRange);