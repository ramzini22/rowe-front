import React from 'react';
import {Link} from 'react-router-dom';
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import functionForPrice from "../helpers/FunctionForPrice";

const OfferCard = (props) => {
    const {id, image, imageAlt, name, price, priceWithoutDiscount} = props
    return (
        <div className="offer">
            <figure>
                <Link to={`/catalog/product/${id}`}>
                    <img src={checkPhotoPath(image)} alt={name}/>
                    <figcaption>
                        <h5><Link to='/' className='stretched-link'>{name}</Link></h5>
                    </figcaption>
                </Link>
            </figure>
            <div className='mt-4 d-flex justify-content-between align-items-center'>
                <div>
                    <h4>{`${functionForPrice(price)} ₽`}</h4>
                    <h6>{`${functionForPrice(priceWithoutDiscount)} ₽`}</h6>
                </div>
                <button type='button' className='btn-2'>В корзину</button>
            </div>
        </div>
    );
};

export default OfferCard;