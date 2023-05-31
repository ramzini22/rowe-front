import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, NavLink} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import Plaix from './svg/Plaix';
import FavoritesIcon from './svg/FavoritesIcon';
import CartIcon from './svg/CartIcon';
import PersonIcon from './svg/PersonIcon';
import CatalogIcon from './svg/CatalogIcon';
import HomeIcon from './svg/HomeIcon';
import ContactsIcon from './svg/ContactsIcon';
import {useAppAction, useAppSelector} from "../store";

const Footer = () => {
    const {mobile} = useIsMobile('991px')
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const categories = useAppSelector(state => state.app.categories)
    const {setRequestShow} = useAppAction()

    return (
        <>
            <footer>
                {
                    mobile
                        ? <Container>
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to="/">
                                            <HomeIcon/>
                                            <span>Главная</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/catalog">
                                            <CatalogIcon/>
                                            <span>Каталог</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/cart">
                                            {shopping?.length!=0 &&
                                                <span className="countNumber">{shopping?.length}</span>
                                            }
                                            <CartIcon/>
                                            <span>Корзина</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contacts">
                                            <ContactsIcon/>
                                            <span>Контакты</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </Container>
                        : <Container>
                            <Row className='mb-5'>
                                <Col md={2}>
                                    <ul>
                                        <li><Link to='/'>Главная</Link></li>
                                        <li><Link to='/catalog'>Каталог</Link></li>
                                        <li><Link to='/delivery'>Доставка и оплата</Link></li>
                                        <li><Link to='/about'>О бренде</Link></li>
                                        <li><Link to='/contacts'>Контакты</Link></li>
                                    </ul>
                                </Col>
                                <Col md={4}>
                                    <ul>
                                        {categories?.map((element, index)=>
                                            <li key={index}>
                                                <Link to={'/catalog'} state={{idCategory:element.id}}>{element.title}</Link>
                                            </li>
                                        )}
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h4>Не нашли что искали?</h4>
                                    <h6>Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут</h6>
                                    <button type='button' className='btn-1 fw-5 mt-4' onClick={setRequestShow}>Оставить заявку</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <div className='fs-08 fw-5'>©Copyright</div>
                                </Col>
                                <Col md={4}>
                                    <Link to="/" className='fs-08 fw-5'>Политика конфиденциальности</Link>
                                </Col>
                                <Col md={6}>
                                    <a href="/" className='dev-link fs-08 ms-auto'>
                                        <span>Создано в</span>
                                        <Plaix/>
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                }
            </footer>
            <nav className="desktop-fixed">
                <ul>
                    <li>
                        <Link to="/favorites">
                            <FavoritesIcon/>
                            {favorites?.length!=0 &&
                                <div style={{marginLeft: '-2px', marginBottom: '30px', position: 'relative'}}>
                                    <span className="count">{favorites?.length}</span>
                                </div>
                            }
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <CartIcon/>
                            {shopping?.length!=0 &&
                                <span className="count">{shopping?.length}</span>
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Footer;