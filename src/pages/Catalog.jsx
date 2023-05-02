import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import CategoryPill from '../components/CategoryPill';
import InputRange from '../components/InputRange';
import ProductCard from '../components/ProductCard';
import Accordion from 'react-bootstrap/Accordion';
import useIsMobile from '../hooks/isMobile';
import CloseIcon from '../components/svg/CloseIcon';
import {useAppSelector} from "../store";
import {useLocation} from "react-router-dom";

const o = [
        {
            image: "imgs/img8.png",
            title: 'HIGHTEC BRAKE FLUID SUPER DOT 5.1',
            price:'930',
            id:1,
            oldPrice:'1140'
        },
        {
            image: "imgs/img8.png",
            title:'HIGHTEC BRAKE FLUID SUPER DOT 4 HIGHTEC BRAKE FLUID DOT 4 SUPER',
            price:'930',
            id:2,

        },
        {
            image: "imgs/img8.png",
            title:'HIGHTEC BRAKE FLUID SUPER DOT 5.1',
            price:'930',
            id:3,
            oldPrice:'1140'
        },
        {
            image: "imgs/img8.png",
            title:'HIGHTEC BRAKE FLUID SUPER DOT 4 HIGHTEC BRAKE FLUID DOT 4 SUPER',
            price:'930',
            id:4,
        }
    ]

const Catalog = () => {
    const {mobile} = useIsMobile('991px');
    const {state} = useLocation()
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const categories = useAppSelector(state => state.app.categories)
    const [showFilters, setShowFilters] = useState(false);
    const handleCloseFilters = () => setShowFilters(false);
    const handleShowFilters = () => setShowFilters(true);
    const [oils, setOils] = useState(o)

    const idCategory=state?.idCategory?state?.idCategory:1
    const nameCategory = categories?.find(element=>element.id==idCategory)?.title


    return (
        <main>
            <Container>
                <NavBreadcrumbs/>

                {
                    (!mobile) &&
                    <section className='sec-8 mb-custom'>
                        <ul>
                            {categories?.map((element, index)=>
                                <li key={index}>
                                    <CategoryPill {...element} />
                                </li>
                                )}
                        </ul>
                    </section>
                }

                <section className='sec-9 mb-sm-4 mb-md-5'>
                    <h1 className='inner'>{nameCategory}</h1>
                    <Row className='gx-4 gx-xl-5'>
                        <Col xs={12} lg={3} className="pe-xxl-5">
                            <Offcanvas show={showFilters} placement={'start'} onHide={handleCloseFilters}
                                       responsive="lg">
                                <Offcanvas.Body>
                                    <div className="d-flex justify-content-between align-items-center d-lg-none mb-4">
                                        <h3 className='mb-0'>Фильтры</h3>
                                        <button type='button' onClick={handleCloseFilters} className='close'>
                                            <CloseIcon/>
                                        </button>
                                    </div>
                                    <form className="filter w-100">
                                        <select className='d-none d-lg-block mb-4'>
                                            <option value="">Сначала дешёвые</option>
                                            <option value="">Сначала дорогие</option>
                                            <option value="">Сначала популярные</option>
                                        </select>

                                        <h6>Цена, ₽</h6>
                                        <InputRange/>

                                        <Accordion className='mt-4' defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header as="h6">Наличие</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <span>В наличии</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <span>Под заказ</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header as="h6">Фасовка</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <span>В наличии</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <span>Под заказ</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header as="h6">Вязкость</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <span>Вязкость 1</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <span>Вязкость 2</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header as="h6">Вид масла</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <span>Вид масла 1</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <span>Вид масла 2</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header as="h6">Официальные допуски</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <span>Официальные допуски 1</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <span>Официальные допуски 2</span>
                                                                <input type="checkbox"/>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Col>
                        <Col xs={12} lg={9}>
                            <ul className="subcategories">
                                <li>
                                    <button type='button' className='btn-3 active'>Все товары</button>
                                </li>
                                <li>
                                    <button type='button' className='btn-3'>Моторные масла</button>
                                </li>
                                <li>
                                    <button type='button' className='btn-3'>Смазки</button>
                                </li>
                                <li>
                                    <button type='button' className='btn-3'>Тормозные жидкости</button>
                                </li>
                                <li>
                                    <button type='button' className='btn-3'>Охлаждающие жидкости</button>
                                </li>
                                <li>
                                    <button type='button' className='btn-3'>Трансмиссионные масла и жидкости</button>
                                </li>
                            </ul>

                            <div className="d-flex justify-content-between align-items-center d-lg-none mb-4 mb-sm-5">
                                <select>
                                    <option value="">Сначала дешёвые</option>
                                    <option value="">Сначала дорогие</option>
                                    <option value="">Сначала популярные</option>
                                </select>

                                <button type='button' onClick={handleShowFilters}>Фильтры</button>
                            </div>

                            <Row xs={2} md={3} className="gx-3 gx-sm-4 gx-xl-5 gy-5">
                                {oils?.map((element, index)=>
                                    <Col key={index}>
                                        <ProductCard
                                            {...element}
                                            fav={favorites?.find(el=>el==element?.id)}
                                            shop={shopping?.find(el=>el==element?.id)}
                                        />
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default Catalog;