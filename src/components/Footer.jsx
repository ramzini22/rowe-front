import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Plaix from './svg/Plaix';
import FavoritesIcon from './svg/FavoritesIcon';
import CartIcon from './svg/CartIcon';
import PersonIcon from './svg/PersonIcon';

const Footer = () => {
  return (
    <>
    <footer>
      <Container>
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
            <a href="/" className='dev-link'>
              <span>Создано в</span>
              <Plaix/>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
    <nav className="desktop-fixed">
      <ul>
        <li>
          <Link to="/">
            <FavoritesIcon/>
          </Link>
        </li>
        <li>
          <Link to="/">
            <CartIcon/>
            <span class="count">2</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <PersonIcon/>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Footer;