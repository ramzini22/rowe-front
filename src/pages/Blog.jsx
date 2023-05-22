import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsPreview2 from '../components/NewsPreview2';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import {GetAllNews} from "../services/News";
import Banner from "../components/Banner";

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
                <Banner />
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