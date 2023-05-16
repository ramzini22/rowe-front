import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import {useLocation, useParams} from "react-router-dom";
import Loader from "../components/Loader";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import {GetOneNew} from "../services/News";

const Article = () => {
    const {state} = useLocation()
    const [oneNew, setOneNew] = useState(state ? state : 'loading')
    const {id} = useParams()
    useEffect(() => {
        if (!state) {
            GetOneNew(id).then(res=>{
                if(res)
                    setOneNew(res)
            })
        }
    }, [])


    return (
        <main>
            {
                oneNew == 'loading' ?
                    <Loader color={'red'}/>
                    : <Container>
                        <NavBreadcrumbs/>

                        <section className='sec-13 mb-custom'>
                            <h1 className='inner'>{oneNew?.title}</h1>
                            <div className="text">
                                <img style={{float:'right'}} src={checkPhotoPath(oneNew?.image)} alt={oneNew?.title}/>
                                <div dangerouslySetInnerHTML={{__html:oneNew?.description}}></div>
                            </div>
                        </section>

                        <section className='sec-5 mt-small mb-sm-4 mb-md-5'>
                            <Row>
                                <Col xs={12} md={7}>
                                    <h2 className='h1'>Получите моторное масло HIGHTEC SYNT RSV SAE 0W-20 в подарок</h2>
                                    <h5>Акция действует при покупке смазки HIGHTEC RACING GREASEGUARD RLF2</h5>
                                </Col>
                                <Col xs={12} md={5} className="mt-4 mt-md-0">
                                    <img src="../../imgs/img9.png" alt="HIGHTEC SYNT RSV SAE 0W-20"/>
                                </Col>
                            </Row>
                        </section>
                    </Container>
            }
        </main>
    );
};

export default Article;