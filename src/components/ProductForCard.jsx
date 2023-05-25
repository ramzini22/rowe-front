import React from 'react';
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import {useAppAction} from "../store";

const ProductForCard = (props) => {

    const {name, image, price, article, oldPrice, id, fav, shop, volume, affinities, checked, funcForOneChecked} = props
    console.log(props)
    const {ChangeFavorites, ChangeShopping} = useAppAction()

    console.log(props)
    return (
        <div className={'product-for-card'}>
            <div className={'d-flex'} onClick={()=>funcForOneChecked(id)}>
                <div className={'d-flex justify-content-between w-100'}>
                    <div className={'d-flex'}>
                        <div className={'px-3'}>
                            <input checked={checked} type="checkbox" onChange={() => funcForOneChecked(id)}/>
                        </div>
                        <div className={'for-img d-flex justify-content-center align-items-center'}>
                            <img src={checkPhotoPath(image)} alt={name}/>
                        </div>
                        <div className={'px-3'}>
                            <div><h4>{name}</h4></div>
                            <div className={'d-none d-md-flex'}>
                                <div>Артикул: {article}</div>
                                <div>Объём: {volume}Л</div>
                            </div>
                            <div className={'d-block d-md-none'}><h4>Цена: {price} ₽</h4></div>
                        </div>

                    </div>

                    <div className={'d-none d-md-flex flex-column px-2'}>
                        <div>
                            Количество
                        </div>
                        <div className={'d-flex'}>
                            <div className={'btn1-shop px-1'} onClick={() => ChangeShopping({id, key: false})}>-</div>
                            <div className={'btn2-shop mx-2'}>{shop?.count || 0}</div>
                            <div className={'btn1-shop'} onClick={() => ChangeShopping({id, key: true})}>+</div>
                        </div>
                    </div>
                    <div className={'d-none d-md-flex flex-column'}>{price * shop?.count || 0}₽</div>
                </div>
            </div>
            <div className={'d-inline-block px-5 d-md-none fs-09'}>
                <div>Артикул: {article}</div>
                <div>Объём: {volume}Л</div>
            </div>
            <div className={'py-2 d-md-none px-5'}>
                <div className={'fw-7'}>
                    Количество
                </div>
                <div className={'d-flex'}>
                    <div className={'btn1-shop px-1'} onClick={() => ChangeShopping({id, key: false})}>-</div>
                    <div className={'btn2-shop mx-2'}>{shop?.count || 0}</div>
                    <div className={'btn1-shop'} onClick={() => ChangeShopping({id, key: true})}>+</div>
                </div>
            </div>

        </div>

    );
};

export default ProductForCard;