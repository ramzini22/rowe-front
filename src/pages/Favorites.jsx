import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {useAppSelector} from "../store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";

const o = [
    {
        image: "imgs/img8.png",
        title: 'HIGHTEC BRAKE FLUID SUPER DOT 5.1',
        price:'930',
        id:1,
        oldPrice:'1140'
    },
    {
        image: "imgs/img8.png",
        title:'HIGHTEC BRAKE FLUID SUPER DOT 4 HIGHTEC BRAKE FLUID DOT 4 SUPER',
        price:'930',
        id:2,

    },
    {
        image: "imgs/img8.png",
        title:'HIGHTEC BRAKE FLUID SUPER DOT 5.1',
        price:'930',
        id:3,
        oldPrice:'1140'
    },
    {
        image: "imgs/img8.png",
        title:'HIGHTEC BRAKE FLUID SUPER DOT 4 HIGHTEC BRAKE FLUID DOT 4 SUPER',
        price:'930',
        id:4,
    }
]
const Favorites = () => {
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const [oils, setOils] = useState(o?.filter(element=>favorites.indexOf( element?.id ) > -1))
    useEffect(()=>{
        // prod
        // GetFavoritesOils(favorites)
        //     .then(res=>{
        //         if(res) setOils(res)
        //     })

        // dev
        setOils(o?.filter(element=>favorites.indexOf( element?.id ) > -1))
    }, [favorites])

    if (favorites?.length)
        return (
            <div className={'p-5'}>
                <Row xs={2} md={3} className="gx-3 gx-sm-4 gx-xl-5 gy-5">
                    {oils?.map((element, index)=>
                        <Col key={index}>
                            <ProductCard
                                {...element}
                                fav={true}
                                shop={shopping?.find(el=>el==element?.id)}
                            />
                        </Col>
                    )}
                </Row>
            </div>
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

export default Favorites;