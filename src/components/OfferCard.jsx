import React from 'react';
import {Link} from 'react-router-dom';

const OfferCard = (props) => {
  return (
    <div className="offer">
      <figure>
        <img src={props.img} alt={props.title}/>
        <figcaption>
          <h5><Link to='/' className='stretched-link'>{props.title}</Link></h5>
        </figcaption>
      </figure>
      <div className='mt-4 d-flex justify-content-between align-items-center'>
        <div>
          <h4>930 ₽</h4>
          <h6>1 140 ₽</h6>
        </div>
        <button type='button' className='btn-2'>В корзину</button>
      </div>
    </div>
  );
};

export default OfferCard;