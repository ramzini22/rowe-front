import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import useOnClickOutside from '../hooks/useOnClickOutside';
import Logo from '../assets/imgs/logo_kzn.svg';
import SearchIcon from './svg/SearchIcon';
import CloseIcon from './svg/CloseIcon';
import SmartphoneIcon from './svg/SmartphoneIcon';
import Menu from '../assets/imgs/MenuIcon.svg';
import Plaix from './svg/Plaix';
import {useAppSelector} from "../store";
import {useDispatch} from "react-redux";
import {SearchByString} from "../store/slices/app/Action";

const Header = () => {
  const {mobile} = useIsMobile('991px');
  const ref = useRef();
  const ref2 = useRef();

  const dispatch= useDispatch()
  const [showSearch, setShowSearch] = useState(false);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  const information = useAppSelector(state=>state.app.information)
  const navigate=useNavigate()

  const [inputSearch, setInputSearch] = useState('')
  const [showMenu, setShowMenu] = useState(false);
  const handleCloseMenu = () =>  setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const clickSearch = () =>{
    setShowSearch(false)
    dispatch(SearchByString(inputSearch))
    navigate('/catalog')
    setInputSearch('')
  }

  // useOnClickOutside(ref, handleCloseMenu)
  // useOnClickOutside(ref2, handleCloseSearch)

  return (
    <>
      <header>
        <Container className='h-100 d-flex justify-content-between align-items-center'>
          <Link to="/"><img src={Logo} alt="ROWE oil Kazan" className='logo'/></Link>
          {
            (!mobile) &&
            <>
              <nav>
                <ul className='list-unstyled d-flex align-items-center'>
                  <li><NavLink to="/">Главная</NavLink></li>
                  <li><NavLink to="/about">О бренде</NavLink></li>
                  <li><NavLink to="/contacts">Контакты</NavLink></li>
                  <li><NavLink to="/catalog" className='btn-1'>Каталог</NavLink></li>
                </ul>
              </nav>
              <a href="tel:+7-987-212-60-76" className='link fs-12 d-flex align-items-center'>
                <SmartphoneIcon className="fs-13 me-1"/>
                <span>{information?.phone}</span>
              </a>
            </>
          }
          <form onSubmit={(e)=>e.preventDefault()} className='search d-none d-xxl-flex'>
            <input value={inputSearch} onChange={e=>setInputSearch(e.target.value)} type="search" placeholder='Поиск...'/>
            <button type='submit' className='btn-1' onClick={clickSearch}>
              <span>Найти</span>
              <SearchIcon/>
            </button>
          </form>

          <ul className="list-unstyled d-flex align-items-center d-xxl-none">
            <li>
              {
                (showSearch)
                ? <button type='button' onClick={()=>setShowSearch(false)} className='d-flex gray fs-15'><CloseIcon/></button>
                : <button type='button' onClick={handleShowSearch} className='d-flex gray fs-15'><SearchIcon/></button>
              }
            </li>
            {
              (mobile) &&
              <li>
                {
                  (showMenu)
                  ? <button type='button' onClick={handleCloseMenu} className='fs-18 d-flex d-xxl-none'><CloseIcon className='dark-gray'/></button>
                  : <button type='button' onClick={handleShowMenu} className='fs-18 d-flex d-xxl-none'><img src={Menu} alt="menu icon" /></button>
                }
              </li>
            }
          </ul>
        </Container>
      </header>

      <Offcanvas show={showSearch} onHide={handleCloseSearch} placement={'top'}>
        <Offcanvas.Body ref={ref2} className="py-4 py-md-5">
          <Container>
            <form onSubmit={(e)=>e.preventDefault()} className='search w-100'>
              <input value={inputSearch} onChange={e=>setInputSearch(e.target.value)} type="search" placeholder='Поиск...' className='flex-1'/>
              <button type='submit' className='btn-1' onClick={clickSearch}>
                <span>Найти</span>
                <SearchIcon/>
              </button>
            </form>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement={'end'}>
        <Offcanvas.Body ref={ref}>
          <div className="mobile-offering">
            <Container>
              <img src="imgs/img13.png" alt="моторное масло HIGHTEC GTS SPEZIAL SAE 20W-20" />
              <div>
                <h2 className='title-font fw-4'>Выгоднее на 25%</h2>
                <h4>моторное&nbsp;масло HIGHTEC GTS SPEZIAL&nbsp;SAE&nbsp;20W&#8209;20</h4>
              </div>
            </Container>
          </div>
          <Container>
            <nav className='mobile-menu mb-4 mb-sm-5'>
              <ul onClick={handleCloseMenu}>
                <li><Link to='/catalog'>Каталог</Link></li>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/'>Акции</Link></li>
                <li><Link to='/about'>О бренде</Link></li>
                <li><Link to='/delivery'>Оплата и доставка</Link></li>
              </ul>
            </nav>
            <a href="/" className='dev-link'>
              <span>Создано в</span>
              <Plaix/>
            </a>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;