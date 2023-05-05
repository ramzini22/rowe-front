import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import Container from "react-bootstrap/Container";
import {GetOilsByIds} from "../services/Oils";

const Cart = () => {
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const [oils, setOils] = useState()
    useEffect(() => {
        GetOilsByIds(shopping)
            .then(res => {
                if (res) setOils(res)
            })
    }, [shopping])

    if (shopping?.length)
        return (
            <main>
                <div className={'p-5'}>
                    <Row xs={2} md={3} className="gx-3 gx-sm-4 gx-xl-5 gy-5">
                        {oils?.length>0 && oils?.map((element, index) =>
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