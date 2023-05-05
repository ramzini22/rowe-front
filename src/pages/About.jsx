import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import CategoryPill from '../components/CategoryPill';
import useIsMobile from '../hooks/isMobile';
import {useAppSelector} from "../store";

const About = () => {

    const {mobile} = useIsMobile('991px');
    const categories = useAppSelector(state => state.app.categories)

    return (
        <main>
            <Container>
                <NavBreadcrumbs pageName={'О брэнде'}/>
            </Container>

            <section className='sec-14 mb-custom'>
                <Container>
                    <h1 className='text-start mb-0'>ВЫЙДИ ЗА ГРАНИЦЫ</h1>
                </Container>
                <img src="imgs/bg1.jpg" alt="bg1"/>
                <Container>
                    <h6 className='mt-3'>Мы любим смазочные материалы. Наша миссия: высочайшая продуктивность и
                        энтузиазм, который оставляет без ответа только один вопрос: «Как нам стать ещё лучше?». Мы
                        вкладываем в наши первоклассные моторные масла знания и душу и предлагаем клиентам
                        индивидуальные продукты для автомобилей и промышленности. Именно поэтому мы ставим себе на
                        службу все, что выходит за пределы возможного, стремясь добиться максимальных результатов.</h6>
                </Container>
            </section>

            <Container>
                <section className='sec-15 mb-custom'>
                    <Row className='gx-4 gx-xl-5 align-items-center'>
                        <Col xs={12} lg={7}>
                            <h3>СОЗДАЁМ ПРОДУКТЫ ПРЯМО НА&nbsp;ГОНОЧНОЙ&nbsp;ТРАССЕ</h3>
                            <p>Уже более 10 лет компания ROWE создаёт свои смазочные материалы в том числе на гоночной
                                трассе. В «лаборатории на колёсах» специалисты разрабатывают новые продукты,
                                оптимизируют старые формулы и делают то, что невозможно повторить ни в одной лаборатории
                                мира: тесты в экстремальных полевых условиях, причём с отличным результатом. Ведь износ
                                коробки передач — одна из тех сложностей трассы Нордшляйфе, которые двигают прогресс в
                                нашей отрасли.</p>
                        </Col>
                        <Col xs={12} lg={5} className='mt-4 mt-lg-0'>
                            <img src="imgs/img3.jpg" alt="СОЗДАЁМ ПРОДУКТЫ ПРЯМО НА ГОНОЧНОЙ ТРАССЕ"/>
                        </Col>
                    </Row>
                </section>

                <section className='sec-15 pb-lg-5 mb-sm-4 mb-md-5'>
                    <Row className='gx-4 flex-lg-row-reverse gx-xl-5 align-items-center'>
                        <Col xs={12} lg={7}>
                            <h3>ВЫСОКОТЕХНОЛОГИЧНЫЕ СМАЗКИ MADE&nbsp;IN&nbsp;GERMANY</h3>
                            <p>Уже более 10 лет компания ROWE создаёт свои смазочные материалы в том числе на гоночной
                                трассе. В «лаборатории на колёсах» специалисты разрабатывают новые продукты,
                                оптимизируют старые формулы и делают то, что невозможно повторить ни в одной лаборатории
                                мира: тесты в экстремальных полевых условиях, причём с отличным результатом. Ведь износ
                                коробки передач — одна из тех сложностей трассы Нордшляйфе, которые двигают прогресс в
                                нашей отрасли.</p>
                        </Col>
                        <Col xs={12} lg={5} className='mt-4 mt-lg-0'>
                            <img src="imgs/img14.jpg" alt="ВЫСОКОТЕХНОЛОГИЧНЫЕ СМАЗКИ MADE IN GERMANY"/>
                        </Col>
                    </Row>
                </section>

                {
                    (!mobile) &&
                    <section className='sec-8 mb-sm-4 mb-md-5'>
                        <h3 className='text-center'>Найдите свой продукт ROWE</h3>
                        <ul className='justify-content-center'>
                            {categories?.map((element, index)=>
                                <li key={index}>
                                    <CategoryPill {...element} />
                                </li>
                            )}
                        </ul>
                    </section>
                }
            </Container>
        </main>
    );
};

export default About;