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

const Footer = () => {
  const {mobile} = useIsMobile('991px')
  
  return (
    <>
    <footer>
      {
        (mobile)
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
              <li>
                <NavLink to="/profile">
                  <PersonIcon/>
                  <span>Профиль</span>
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
                <li><Link to='/'>Каталог</Link></li>
                <li><Link to='/'>Доставка и оплата</Link></li>
                <li><Link to='/'>О бренде</Link></li>
                <li><Link to='/'>Контакты</Link></li>
              </ul>
            </Col>
            <Col md={4}>
              <ul>
                <li><Link to='/'>Гоночные масла</Link></li>
                <li><Link to='/'>Для легковых авто</Link></li>
                <li><Link to='/'>Для коммерческого транспорта</Link></li>
                <li><Link to='/'>Индустрия</Link></li>
                <li><Link to='/'>Мотоциклы и водный транспорт</Link></li>
              </ul>
            </Col>
            <Col md={6}>
              <h4>Не нашли что искали?</h4>
              <h6>Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут</h6>
              <button type='button' className='btn-1 fw-5 mt-4'>Оставить заявку</button>
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
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <CartIcon/>
            <span class="count">2</span>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <PersonIcon/>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Footer;