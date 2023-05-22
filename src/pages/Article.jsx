import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import {useLocation, useParams} from "react-router-dom";
import Loader from "../components/Loader";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import {GetOneNew} from "../services/News";
import Banner from "../components/Banner";

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
                        <NavBreadcrumbs pageName={'Новость'}/>

                        <section className='sec-13 mb-custom'>
                            <h1 className='inner'>{oneNew?.title}</h1>
                            <div className="text">
                                <img style={{float:'right'}} src={checkPhotoPath(oneNew?.image)} alt={oneNew?.title}/>
                                <div dangerouslySetInnerHTML={{__html:oneNew?.description}}></div>
                            </div>
                        </section>
                    <Banner />
                    </Container>
            }
        </main>
    );
};

export default Article;