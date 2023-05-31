import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import CategoryPill from '../components/CategoryPill';
import useIsMobile from '../hooks/isMobile';
import FavoritesIcon from '../components/svg/FavoritesIcon';
import {Link, NavLink, useParams} from 'react-router-dom';
import {useAppAction, useAppSelector} from "../store";
import {GetOilsOne} from "../services/Oils";
import FunctionForPrice from "../helpers/FunctionForPrice";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import Loader from "../components/Loader";

const Product = () => {
    const {mobile} = useIsMobile('991px');
    const {id} = useParams()
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const {ChangeFavorites, ChangeShopping} = useAppAction()
    const categories = useAppSelector(state => state.app.categories)
    const [oil, setOil] = useState()
    const fav = favorites?.find(el => el == id)
    const shop = shopping?.find(el => el == id)

    useEffect(() => {
        setOil('loading')
        GetOilsOne(id).then(res => {
            if (res) {
                setOil(res)
            }
        })
    }, [id])

    return (
        <main>
            {
                oil === 'loading' ?
                    <Loader color={'red'}/>
                    : <Container>
                        <NavBreadcrumbs pageName={'Страница продукта'}/>

                        {
                            (!mobile) &&
                            <section className='sec-8 mb-custom'>
                                <ul>
                                    {categories?.map((element, index) =>
                                        <li key={index}>
                                            <CategoryPill {...element} />
                                        </li>
                                    )}
                                </ul>
                            </section>
                        }

                        <section className='sec-12 mb-sm-4 mb-md-5'>
                            <Row className='g-4 g-xxl-5'>
                                <Col sm={4} lg={3}>
                                    <img src={checkPhotoPath(oil?.image)} alt={oil?.title}/>
                                </Col>
                                <Col sm={8} lg={5} xxl={6}>
                                    <h1 className='inner'>{oil?.name}</h1>
                                    <small className='fw-5'>Артикул: {oil?.article}</small>
                                    <ul className='specification list-unstyled'>
                                        {oil?.parameters?.map((element, index) =>
                                            <li key={index}><strong
                                                className='me-2 me-xl-3'>{element?.name}</strong>{element?.options[0]?.name}
                                            </li>
                                        )}
                                    </ul>
                                </Col>
                                <Col sm={{span: 8, offset: 4}} lg={{span: 4, offset: 0}} xxl={3}>
                                    <h4>Выберите фасовку</h4>
                                    <ul className='packaging-list'>
                                        {
                                            oil?.affinities?.length > 0 ?
                                                [...oil?.affinities, oil]
                                                    ?.sort((a, b)=>a.volume-b.volume)
                                                    ?.map((element, index) =>
                                                    <li key={index}>
                                                        <label>
                                                            <NavLink to={`/catalog/product/${element?.id}`}>
                                                                <input type="radio" checked={element?.id!=oil.id} name="packaging" hidden/>
                                                                <div>{element?.volume}Л</div>
                                                            </NavLink>
                                                        </label>
                                                    </li>
                                                )
                                                : [oil]?.map((element, index) =>
                                                    <li key={index}>
                                                        <label>
                                                            <NavLink to={`/catalog/product/${element?.id}`}>
                                                                <input type="radio" name="packaging" hidden/>
                                                                <div>{element?.volume}Л</div>
                                                            </NavLink>
                                                        </label>
                                                    </li>
                                                )

                                        }
                                    </ul>
                                    <div className="box mt-4">
                                        <div>
                                            <h4>{FunctionForPrice(oil?.price) + ' ₽'}</h4>
                                            <h6>{oil?.priceWithoutDiscount && FunctionForPrice(oil?.priceWithoutDiscount) + ' ₽'}</h6>
                                        </div>
                                        <button type='button' className={`btn-2 ${shop ? 'btn2-active' : ''}`}
                                                onClick={() => ChangeShopping(id)}>
                                            {shop ? 'В корзине' : 'В корзину'}
                                        </button>
                                        <button type='button' className={fav ? 'btn-fav checked' : 'btn-fav'}
                                                onClick={() => ChangeFavorites(id)}>
                                            <FavoritesIcon/>
                                        </button>
                                    </div>
                                    <small className='d-block fw-5'>
                                        <Link to={`/catalog/`} state={{idCategory: oil?.category?.id}} className='link'>
                                            {`Все товары категории ${oil?.category?.name}`}
                                        </Link>
                                    </small>
                                </Col>
                                <Col sm={12} lg={9}>
                                    <div className="text" dangerouslySetInnerHTML={{__html: oil?.description}}>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </Container>
            }
        </main>
    );
};

export default Product;