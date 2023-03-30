import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';
import Rowe from '../assets/imgs/rowe.svg';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import OfferCard from '../components/OfferCard';
import NewsPreview from '../components/NewsPreview';
import Cursor from '../components/svg/Cursor';

const Home = () => {
  return (
    <main>
      <Container>
        <section className='sec-1'>
          <h1>Немецкое качество для вашего авто</h1>
          <button type='button' className='btn-1 mx-auto'>Выбрать масло</button>
        </section>
      </Container>

      <section className='sec-2'>
        <Container>
          <div className='left'>
            <h4 className='title-1'>
              <span>Моторные масла<br/> и смазки</span>
              {/* <img src="imgs/icons/circle.svg" alt="circle" /> */}
            </h4>
            <h4 className='title-2'>
              <span>Охлаждающие жидкости</span>
              </h4>
          </div>
          <img src="imgs/img1.png" alt="engine" className='engine'/>
          <div className='right'>
            <h4 className='text-md-end title-3'>Трансмиссионные<br/> масла и жидкости</h4>
            <h4 className='text-md-end title-4'>Тормозные жидкости</h4>
          </div>
        </Container>
      </section>

      <Container>
        <section className='sec-3 mb-custom'>
          <h3>Каталог товаров</h3>
          <Row className="gx-3 gy-3 gy-sm-4">
            <Col xs={12} lg={3}>
              <Row xs={1} md={2} lg={1} className="gx-3 gy-4">
                <Col><CategoryCard img={"imgs/img2.jpg"} title={'Для легковых авто'}/></Col>
                <Col><CategoryCard img={"imgs/img3.jpg"} title={'Гоночные масла'}/></Col>
              </Row>
            </Col>
            <Col xs={12} lg={3}>
              <Row xs={2} lg={1} className="gx-3 gy-4">
                <Col><CategoryCard img={"imgs/img4.jpg"} title={'Спецтехника'}/></Col>
                <Col><CategoryCard img={"imgs/img5.jpg"} title={'Мотоциклы и водный транспорт'}/></Col>
              </Row>
            </Col>
            <Col xs={6} lg={3}><CategoryCard className={'bigger'} img={"imgs/img6.jpg"} title={'Для коммерческого транспорта'}/></Col>
            <Col xs={6} lg={3}>
              <CategoryCard className={'big'} img={"imgs/img7.png"} title={'Индустрия'}/>
              <button type='button' className='btn-2 w-100 d-none d-lg-block mt-lg-5'>В каталог</button>
            </Col>
          </Row>
        </section>

        <section className='sec-4 mb-custom'>
          <h3>Акционные предложения</h3>
          <div className='position-relative'>
            <Cursor className="cursor-animated"/>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <OfferCard title={'Гоночное моторное масло HIGHTEC RACING MOTOR OIL SAE 10W-40'} img={"imgs/img8.png"}/>
              </SwiperSlide>
              <SwiperSlide>
                <OfferCard title={'Антифриз HIGHTEC ANTIFREEZE AN G11'} img={"imgs/img10.png"}/>
              </SwiperSlide>
              <SwiperSlide>
                <OfferCard title={'Трансмиссионное масло  HIGHTEC LHM-PLUS'} img={"imgs/img11.png"}/>
              </SwiperSlide>
              <SwiperSlide>
                <OfferCard title={'Формовочное масло HIGHTEC SUNLUB® FORM 46P'} img={"imgs/img12.png"}/>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className='sec-5 mb-custom'>
          <Row>
            <Col xs={12} md={7}>
              <h2 className='h1'>Получите моторное масло HIGHTEC SYNT RSV SAE 0W-20 в подарок</h2>
              <h5>Акция действует при покупке смазки HIGHTEC RACING GREASEGUARD RLF2</h5>
            </Col>
            <Col xs={12} md={5} className="mt-4 mt-md-0">
              <img src="imgs/img9.png" alt="HIGHTEC SYNT RSV SAE 0W-20" />
            </Col>
          </Row>
        </section>

        <section className='sec-6 mb-custom'>
          <h2>Будьте в курсе новостей из мира…</h2>

          <ul className="news-list">
            <li>
              <NewsPreview img={"imgs/img7.jpg"} title={"7 признаков неисправности тормозной системы"}/>
            </li>
            <li>
              <NewsPreview img={"imgs/img7.jpg"} title={"Как подготовить автомобиль к весенней эксплуатации?"}/>
            </li>
            <li>
              <NewsPreview img={"imgs/img7.jpg"} title={"Уходит антифриз. Что делать?"}/>
            </li>
            <li className='flex-1'>
              <Link className='link' to='/blog'>Перейти в блог</Link>
            </li>
          </ul>
        </section>

        <section className='sec-7 mb-sm-3 mb-md-5'>
          <Row xs={1} lg={2} className='align-items-center'>
            <Col>
              <h2 className='d-flex align-items-baseline'>
                <span className='me-3'>О бренде</span> 
                <img src={Rowe} alt="Rowe"/>
              </h2>
              <h5>Мы знаем, что должно уметь масло. Наши продукты протестированы в сложнейших условиях на тысячах километров гоночных трасс. Они созданы для того, чтобы соответствовать строжайшим требованиям на дорогах.А вы готовы к новому импульсу?</h5>
            </Col>
            <Col className="ps-lg-5 mt-4 mt-md-5 mt-lg-0">
              <div className="video-wrap">
                <iframe src="https://www.youtube.com/embed/7o4j42V21qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Home;