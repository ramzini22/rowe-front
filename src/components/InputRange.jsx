import React, {useState} from 'react';

const InputRange = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const minV = 0;
  const maxV = 100;
  return (
    <div className='range'>
      <div className='range-inputs mb-4'>
        <input type="number" placeholder='0'/>
        <input type="number" placeholder='0' className='ms-3'/>
      </div>
      <div className="range-slider">
        <div className="range-slider-rail"></div>
        <div className="range-slider-track"></div>
        <div className="range-slider-handle-1"></div>
        <div className="range-slider-handle-2"></div>
      </div>
    </div>
  );
};

export default InputRange;