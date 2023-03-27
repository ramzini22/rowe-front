import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Logo from '../assets/imgs/logo_kzn.svg';
import SearchIcon from './svg/SearchIcon';
import SmartphoneIcon from './svg/SmartphoneIcon';
import useIsMobile from '../hooks/isMobile';
import Menu from '../assets/imgs/MenuIcon.svg';

const Header = () => {
  const {mobile} = useIsMobile('991px')

  return (
    <header>
      <Container className='h-100 d-flex justify-content-between align-items-center'>
        <Link to="/"><img src={Logo} alt="ROWE oil Kazan" /></Link>
        {
          (!mobile) &&
          <>
            <nav>
              <ul className='list-unstyled d-flex align-items-center'>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/">О бренде</Link></li>
                <li><Link to="/">Контакты</Link></li>
                <li><Link to="/" className='btn-1'>Каталог</Link></li>
              </ul>
            </nav>
            <a href="tel:+7-987-212-60-76" className='link fs-12 d-flex align-items-center'>
              <SmartphoneIcon className="fs-13 me-1"/>
              <span>+7-987-212-60-76</span>
            </a>
          </>
        }
        <form action="" className='search d-none d-xxl-flex'>
          <input type="search" placeholder='Поиск...'/>
          <button type='submit' className='btn-1'>
            <span>Найти</span>
            <SearchIcon/>
          </button>
        </form>

        <div className="d-flex align-items-center d-xxl-none">
          <button type='button' className='gray fs-15'>
            <SearchIcon/>
          </button>
          {
            (mobile) &&
            <button type='button' className='gray fs-15 d-flex d-xxl-none ms-4'>
              <img src={Menu} alt="menu icon" />
            </button>
          }
        </div>
        
      </Container>
    </header>
  );
};

export default Header;