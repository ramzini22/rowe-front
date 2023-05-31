import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactsFillIcon from '../components/svg/ContactsFillIcon';
import Wapp from '../components/svg/Wapp';
import useIsMobile from '../hooks/isMobile';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import Banner from "../components/Banner";
import {useAppAction, useAppSelector} from "../store";
import {GetInformation} from "../services/Options";

const Contacts = () => {
    const {mobile} = useIsMobile('991px');
    const information = useAppSelector(state=>state.app.information)
    const {setRequestShow} = useAppAction()
    return (
        <main>
            <Container>
                <NavBreadcrumbs pageName={'Контакты'}/>

                <section className='sec-10 mb-5'>
                    <Row className='gx-4 gx-xl-5'>
                        <Col xs={12} lg={4}>
                            <h1 className='inner mb-4'>{information?.legalStatus}</h1>
                            <h3 className='mb-4'>
                                <a href="tel:+79872126076" className='phone'>
                                    <ContactsFillIcon/>
                                    <span className='ms-2'>{information?.phone}</span>
                                </a>
                            </h3>
                            <h3 className='mb-4'>
                                <address>{information?.address}</address>
                            </h3>
                            {
                                (!mobile) &&
                                <div>
                                    <h3 className='mt-5 mb-3'>Возникли вопросы?</h3>
                                    <h6>Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут</h6>
                                    <button type='button' className='btn-1 mt-4' onClick={setRequestShow}>Оставить заявку</button>
                                </div>
                            }
                        </Col>
                        <Col xs={12} lg={8}>
                            <iframe title="map"
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A88fb796c1b3edb68fae80f64766a89d0d70d232b285986860bd2460ed54aba9d&amp;source=constructor"
                                    width="100%" height="400" frameBorder="0"></iframe>
                            {
                                (mobile) &&
                                <ul className='list-unstyled'>
                                    <li><a href="tel:+79872126076" className='btn-1 w-100 mt-4'>
                                        <ContactsFillIcon/>
                                        <span>Позвонить</span>
                                    </a></li>
                                    <li><a href="tel:+79872126076" className='btn-2 w-100 mt-3'>
                                        <Wapp/>
                                        <span>Написать в WhatsApp</span>
                                    </a></li>
                                </ul>
                            }
                        </Col>
                    </Row>
                </section>

                <Banner />

            </Container>
        </main>
    );
};

export default Contacts;