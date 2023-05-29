import React from 'react';
import {Link} from 'react-router-dom';
import FavoritesIcon from './svg/FavoritesIcon';
import FunctionForPrice from "../helpers/FunctionForPrice";
import {useAppAction} from "../store";
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const ProductCard = (props) => {
    const {ChangeFavorites, ChangeShopping} = useAppAction()
    const {title, image, price, oldPrice, id, fav, shop, volume, affinities} = props
    return (
        <div className="product-card">
            <Link to={`/catalog/product/${id}`}><img src={checkPhotoPath(image)} alt={title}/></Link>
            <h3><Link to={`/catalog/product/${id}`}>{title}</Link></h3>
            <div className='d-sm-flex justify-content-between align-items-center'>
                <p>{`Фасовка: `}
                    {affinities?.length > 0 ?
                        [...affinities.map(element => element.targetProduct), props]
                            ?.sort((a, b) => a.volume - b.volume)
                            .map(element => element.volume+'Л; ')
                        : props.volume+'Л;'
                    }
                </p>
                {/*<p>Вязкость: 10W-60</p>*/}
            </div>
            <div className='bottom'>
                <div>
                    <h4>{FunctionForPrice(price) + ' ₽'}</h4>
                    {oldPrice && <h6>{FunctionForPrice(oldPrice) + ' ₽'}</h6>}
                </div>
                <button type='button' className={`btn-2 ${shop ? 'btn2-active' : ''}`}
                        onClick={() => !shop && ChangeShopping({id, key:true, price})}
                >
                    {shop ? 'В корзине' : 'В корзину'}
                </button>
            </div>
            <button type='button' className={(fav) ? 'btn-fav checked' : 'btn-fav'}
                    onClick={() => {
                        ChangeFavorites(id)
                    }}>
                <FavoritesIcon/>
            </button>
        </div>
    );
};

export default ProductCard;