import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import Container from "react-bootstrap/Container";
import {GetOilsByIds} from "../services/Oils";
import Loader from "../components/Loader";

const Cart = () => {
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const [oils, setOils] = useState()

    useEffect(() => {
        if (shopping?.length > 0){
            setOils('loading')
            GetOilsByIds(shopping)
                .then(res => {
                    if (res)
                        setOils(res)
                    else
                        setOils(null)
                })
        }
    }, [])

    useEffect(()=>{
        if(shopping?.length<oils?.length){
            const newArray = oils?.filter(element=>shopping?.includes(element.id))
            setOils(newArray)
        }
    }, [shopping])

    if (oils === 'loading')
        return (
            <main>
                <Loader color={'red'}/>
            </main>)
    else if (shopping?.length)
        return (
            <main>
                <div className={'p-3 p-sm-4 p-lg-5'}>
                    <Row xs={2} md={3} className="gx-3 gx-sm-4 gx-xl-5 gy-5">
                        {oils?.length > 0 && oils?.map((element, index) =>
                            <Col key={index}>
                                <ProductCard
                                    {...element}
                                    fav={favorites?.find(el => el == element?.id)}
                                    shop={true}
                                />
                            </Col>
                        )}
                    </Row>
                </div>
            </main>
        );
    else
        return (
            <main>
                <Container>
                    <h1>Товаров не найдено</h1>
                </Container>
            </main>
        );
};

export default Cart;