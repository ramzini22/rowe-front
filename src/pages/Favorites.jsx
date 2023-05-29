import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {useAppSelector} from "../store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import {GetOilsByIds} from "../services/Oils";
import Loader from "../components/Loader";
import NavBreadcrumbs from "../components/NavBreadcrumbs";

const Favorites = () => {
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const [oils, setOils] = useState([])

    useEffect(() => {
        if (favorites?.length > 0) {
            setOils('loading')
            GetOilsByIds(favorites)
                .then(res => {
                    if (res)
                        setOils(res)
                    else
                        setOils(null)
                })
        }
    }, [])

    useEffect(() => {
        if (favorites?.length < oils?.length) {
            const newArray = oils?.filter(element => favorites?.includes(element.id))
            setOils(newArray)
        }
    }, [favorites])

    if (oils === 'loading')
        return (
            <main>
                <Container>
                    <NavBreadcrumbs pageName={'Понравившиеся'}/>
                    <Loader color={'red'}/>
                </Container>
            </main>)
    else if (favorites?.length)
        return (
            <main>
                <Container>
                    <div>
                        <NavBreadcrumbs pageName={'Понравившиеся'}/>
                        <Row xs={2} md={3} className="gx-3 gx-sm-4 gx-xl-5 gy-5">
                            {oils?.length > 0 && oils?.map((element, index) =>
                                <Col key={index}>
                                    <ProductCard
                                        {...element}
                                        fav={true}
                                        shop={shopping?.find(el => el.id == element?.id)}
                                    />
                                </Col>
                            )}
                        </Row>
                    </div>
                </Container>
            </main>
        );
    else
        return (
            <main>
                <Container>
                    <NavBreadcrumbs pageName={'Понравившиеся'}/>
                    <h1>Товаров не найдено</h1>
                </Container>
            </main>
        );

};

export default Favorites;