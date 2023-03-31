import React, {useState, useRef, useEffect} from 'react';

const InputRange = () => {
  const ref = useRef();
  const ref1 = useRef();

  const [startValue, setStartValue] = useState(10);
  const [endValue, setEndValue] = useState(50);

  let style1 = {
    left: startValue+'%',
  }
  let style2 = {
    left: endValue+'%',
  }

  const minV = 0;
  const maxV = 100;

  const handleVal1 = (e) => {
    e.preventDefault();
    let startPoint = e.target.offsetLeft; // позиция первого тумблера относительно диапазона 
    let startPointC = e.target.clientX;
    console.log('startPoint='+startPoint);
    const parentW = e.target.offsetParent.offsetWidth;
    console.log('parentW='+parentW);

    // const mathPercent = (x) => {
    //   if (x > 0 && x < parentW){
    //     return x/parentW*100
    //   } else if (x <= 0) {
    //     return 0
    //   } else {
    //     return 100
    //   }
    // }
    // const listener = (event) => {
    //   let cordX = event.clientX;
    //   console.log('cordX='+cordX);
    //   if (startPointC > cordX){
    //     let diff = startPointC - cordX;
    //     let num = mathPercent(startPoint - diff);
    //     setStartValue(num);
    //   } else {
    //     let diff = cordX - startPointC;
    //     let num = mathPercent(startPoint + diff);
    //     setStartValue(num);
    //   }
    // };

    if (e.type === "mousedown"){
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
    console.log('startPoint='+endPoint);
  }

  return (
    <div className='range'>
      <div className='range-inputs mb-4'>
        <input type="number" placeholder='0' value={startValue} min={minV} max={maxV} onChange={(e) => setStartValue(e.target.value)}/>
        <input type="number" placeholder='0' value={endValue} min={minV} max={maxV} onChange={(e) => setEndValue(e.target.value)} className='ms-3'/>
      </div>

      <div ref={ref} className="range-slider">
        <div className="range-slider-rail">
          <div className="min">{minV}</div>
          <div className="max">{maxV}</div>
        </div>
        <div className="range-slider-track"></div>

        <div 
          ref={ref1}
          className="range-slider-handle-1" 
          style={style1} 
          onMouseDownCapture={(e)=>handleVal1(e)}
          onMouseUp={(e)=>handleVal1(e)}>
        </div>
        <div 
          className="range-slider-handle-2"
          style={style2} 
          onMouseDownCapture={(e)=>handleVal2(e)}>
        </div>
      </div>
    </div>
  );
};

export default InputRange;