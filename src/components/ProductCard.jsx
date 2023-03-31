import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import FavoritesIcon from './svg/FavoritesIcon';

const ProductCard = (props) => {
  const [fav, setFav] = useState(false);

  return (
    <div className="product-card">
      <Link to="/catalog/product"><img src={props.img} alt={props.title}/></Link>
      <h3><Link to="/catalog/product">{props.title}</Link></h3>
      <div className='d-sm-flex justify-content-between align-items-center'>
        <p>Фасовка: 1 л; 5 л</p>
        <p>Вязкость: 10W-60</p>
      </div>
      <div className='bottom'>
        <div>
          <h4>930 ₽</h4>
          <h6>1 140 ₽</h6>
        </div>
        <button type='button' className='btn-2'>В корзину</button>
      </div>
      <button type='button' className={(fav)?'btn-fav checked':'btn-fav'} onClick={()=>setFav(!fav)}>
        <FavoritesIcon/>
      </button>
    </div>
  );
};

export default ProductCard;