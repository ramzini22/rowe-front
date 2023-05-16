import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsPreview2 from '../components/NewsPreview2';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import {GetAllNews} from "../services/News";

const Blog = () => {
    const [news, setNews] = useState()

    useEffect(() => {
        GetAllNews({page: 1, limit: 3}).then(res => {
            if (res) {
                setNews(res?.body)
            }
        })
    }, [])


    return (
        <main>
            <Container>
                <NavBreadcrumbs pageName={'Блог'}/>

                <section className='sec-5 mt-small mb-custom'>
                    <Row>
                        <Col xs={12} md={7}>
                            <h2 className='h1'>Получите моторное масло HIGHTEC SYNT RSV SAE 0W-20 в подарок</h2>
                            <h5>Акция действует при покупке смазки HIGHTEC RACING GREASEGUARD RLF2</h5>
                        </Col>
                        <Col xs={12} md={5} className="mt-4 mt-md-0">
                            <img src="imgs/img9.png" alt="HIGHTEC SYNT RSV SAE 0W-20"/>
                        </Col>
                    </Row>
                </section>

                <section className='sec-11 mb-sm-4 mb-md-5'>
                    <Row>
                        <Col xxl={11}>
                            <ul className="news-list-2">
                                {news?.map((element, index)=>
                                    <li key={index}>
                                        <NewsPreview2 {...element} />
                                    </li>
                                )}
                            </ul>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default Blog;