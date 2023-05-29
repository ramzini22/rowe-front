import React from 'react';
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import {useAppAction} from "../store";
import {useNavigate} from "react-router-dom";
import FunctionForPrice from "../helpers/FunctionForPrice";
import {RiDeleteBin6Line} from 'react-icons/ri'

const ProductForCard = (props) => {

    const {name, image, price, article, oldPrice, id, fav, shop, volume, affinities, checked, funcForOneChecked} = props
    const {ChangeFavorites, ChangeShopping, DeleteOneProduct} = useAppAction()
    const navigate = useNavigate()

    return (
        <div className={'product-for-card mt-2 '}>
            <div className={'d-flex'}>
                <div className={'d-flex justify-content-between w-100'}>
                    <div className={'d-flex'} style={{cursor:'pointer'}}>
                        <div className={'px-3'}>
                            <input checked={checked} type="checkbox" onChange={() => funcForOneChecked(id)}/>
                        </div>
                        <div className={'for-img d-flex justify-content-center align-items-center'} onClick={()=>navigate(`/catalog/product/${id}`)}>
                            <img src={checkPhotoPath(image)} alt={name}/>
                        </div>
                        <div className={'px-3'} >
                            <div><h4>{name}</h4></div>
                            <div className={'d-none d-md-inline-block'}>
                                <div>Артикул: {article}</div>
                                <div>Объём: {volume}Л</div>
                            </div>
                            <div><h4 style={{whiteSpace:'nowrap'}}>Цена: {FunctionForPrice(price)} ₽</h4></div>
                        </div>

                    </div>

                    <div className={'d-none d-md-flex flex-column px-2'}>
                        <div>
                            Количество
                        </div>
                        <div className={'d-flex'}>
                            <div className={'btn1-shop px-1'} onClick={() => ChangeShopping({id, key: false, price})}>-</div>
                            <div className={'btn2-shop mx-2'}>{shop?.count || 0}</div>
                            <div className={'btn1-shop'} onClick={() => ChangeShopping({id, key: true, price})}>+</div>
                        </div>
                    </div>
                    <div style={{whiteSpace:'nowrap', width:'80px'}} className={'d-none d-md-flex flex-column align-items-end flex-nowrap'}>{FunctionForPrice(price * shop?.count) || 0} ₽</div>
                </div>
            </div>
            <div className={'d-inline-block px-5 d-md-none fs-09'}>
                <div>Артикул: {article}</div>
                <div>Объём: {volume}Л</div>
            </div>
            <div className={'py-2 d-md-none'} style={{marginLeft:'45px'}}>
                <div className={'fw-7'}>
                    Количество
                </div>
                <div className={'d-flex w-100'}>
                    <div className={'btn1-shop px-1'} onClick={() => ChangeShopping({id, key: false})}>-</div>
                    <div className={'btn2-shop flex-grow-1 mx-2'}>{shop?.count || 0}</div>
                    <div className={'btn1-shop'} onClick={() => ChangeShopping({id, key: true})}>+</div>
                </div>
            </div>
            <div className={'d-none d-md-block position-relative'} style={{bottom:'35px', color:'#c00'}}>
                <div className={'d-flex justify-content-end'}>
                    <div className={'px-4'} style={{cursor:'pointer'}} onClick={()=>!fav && ChangeFavorites(id)}>{fav?'В избранных':'Добавить в избранное'}</div>
                    <div onClick={()=>DeleteOneProduct({id})}><RiDeleteBin6Line style={{cursor:'pointer'}} /></div>
                </div>
            </div>
        </div>

    );
};

export default ProductForCard;