import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';
import Rowe from '../assets/imgs/rowe.svg';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import OfferCard from '../components/OfferCard';
import NewsPreview from '../components/NewsPreview';
import Cursor from '../components/svg/Cursor';
import {useAppSelector} from "../store";
import {GetAllNews} from "../services/News";
import {GetOilsWithDiscount} from "../services/Oils";
import Banner from "../components/Banner";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Loader from "../components/Loader";

const Home = () => {
    const categories = useAppSelector(state => state.app.categories)
    const [news, setNews] = useState()
    const {shopping} = useAppSelector(state => state?.user?.user)

    const [oilsWithDiscount, setOilsWithDiscount] =useState()
    useEffect(()=>{
        GetAllNews({page:1, limit:3}).then(res=>{
            if(res){
                setNews(res?.body)
            }
        })

        GetOilsWithDiscount().then(res=>{
            if(res){
                setOilsWithDiscount(res)
            }
        })

    }, [])
    if(!categories)
        return (
            <Loader />
    )
    else
        return (
        <main>
            <Container>
                <section className='sec-1'>
                    <h1>Немецкое качество для вашего авто</h1>
                    <Link to='/catalog'>
                        <button type='button' className='btn-1 mx-auto'>Выбрать масло</button>
                    </Link>
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
                        <h4 className='text-md-end title-3'>Трансмиссионные<br/> масла и жидкости</h4>
                        <h4 className='text-md-end title-4'>Тормозные жидкости</h4>
                    </div>
                </Container>
            </section>

            {categories &&
                <Container>
                    <section className='sec-3 mb-custom'>
                        <h3>Каталог товаров</h3>
                        <Row className="gx-3 gy-3 gy-sm-4">
                            <Col xs={12} lg={3}>
                                <Row xs={1} md={2} lg={1} className="gx-3 gy-4">
                                    {categories?.slice(0, 2)?.map((element, index)=>
                                        <Col key={index}><CategoryCard {...element}/></Col>
                                    )}
                                </Row>
                            </Col>
                            <Col xs={12} lg={3}>
                                <Row xs={2} lg={1} className="gx-3 gy-4">
                                    {categories?.slice(2, 4)?.map((element, index)=>
                                        <Col key={index}><CategoryCard {...element}/></Col>
                                    )}
                                </Row>
                            </Col>
                            <Col xs={6} lg={3}>
                                <CategoryCard {...categories[4]} className={'bigger'} /></Col>
                            <Col xs={6} lg={3}>
                                <CategoryCard {...categories[5]} className={'big'} />
                                <Link to={'/catalog'} state={{idCategory:categories[5]?.id}}>
                                    <button type='button' className='btn-2 w-100 d-none d-lg-block mt-lg-5'>В каталог</button>
                                </Link>
                            </Col>
                        </Row>
                    </section>

                    {
                        oilsWithDiscount?.length>0 &&
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
                                    {oilsWithDiscount?.map((element, index)=>
                                        <SwiperSlide key={index}>
                                            <OfferCard
                                                {...element}
                                                shop={shopping?.find(el => el.id == element?.id)}
                                            />
                                        </SwiperSlide>
                                    )}

                                </Swiper>
                            </div>
                        </section>
                    }

                    <Banner />

                    {
                        news?.length>0 &&
                        <section className='sec-6 mb-custom'>
                            <h2>Будьте в курсе новостей из мира…</h2>

                            <ul className="news-list">
                                {news?.map((element, index)=>
                                    <li key={index}>
                                        <NewsPreview {...element} />
                                    </li>)}
                                <li className='flex-1'>
                                    <Link className='link' to='/blog'>Перейти в блог</Link>
                                </li>
                            </ul>
                        </section>
                    }

                    <section className='sec-7 mb-sm-3 mb-md-5'>
                        <Row xs={1} lg={2} className='align-items-center'>
                            <Col>
                                <h2 className='d-flex align-items-baseline'>
                                    <span className='me-3'>О бренде</span>
                                    <img src={Rowe} alt="Rowe"/>
                                </h2>
                                <h5>Мы знаем, что должно уметь масло. Наши продукты протестированы в сложнейших условиях на
                                    тысячах километров гоночных трасс. Они созданы для того, чтобы соответствовать
                                    строжайшим требованиям на дорогах.А вы готовы к новому импульсу?</h5>
                            </Col>
                            <Col className="ps-lg-5 mt-4 mt-md-5 mt-lg-0">
                                {/*<div className="video-wrap">*/}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7o4j42V21qs"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen>
                                    </iframe>
                                {/*</div>*/}
                            </Col>
                        </Row>
                    </section>
                </Container>
            }
        </main>
    );
};

export default Home;