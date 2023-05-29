import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useAppSelector} from "../store";

const Banner = () => {
    const banner = useAppSelector(state => state.app.banner)

    if (banner)
        return (
            <section className='sec-5 mb-custom'>
                <Row>
                    <Col xs={12} md={7}>
                        <h2 className='h1'>{banner?.title}</h2>
                        <div dangerouslySetInnerHTML={{__html:banner?.description}}></div>
                    </Col>
                    <Col xs={12} md={5} className="mt-4 mt-md-0">
                        <img src="imgs/img9.png" alt="HIGHTEC SYNT RSV SAE 0W-20"/>
                    </Col>
                </Row>
            </section>
        )
};

export default Banner;