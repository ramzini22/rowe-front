import React, {useEffect, useState} from 'react';
import {useAppAction, useAppSelector} from "../store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import Container from "react-bootstrap/Container";
import {GetOilsByIds} from "../services/Oils";
import Loader from "../components/Loader";
import NavBreadcrumbs from "../components/NavBreadcrumbs";
import {useDispatch} from "react-redux";
import ProductForCard from "../components/ProductForCard";

const Cart = () => {
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const [oils, setOils] = useState()
    const {DeleteAllShopping} = useAppAction()
    const dispatch = useDispatch()
    const [checked, setChecked] = useState([])
    const [mainChecked, setMainChecked] = useState(false)
    useEffect(() => {
        if (shopping?.length > 0) {
            setOils('loading')
            GetOilsByIds(shopping.map(element=>element.id))
                .then(res => {
                    if (res)
                        setOils(res)
                    else
                        setOils(null)
                })
        }
    }, [])

    useEffect(() => {
        if (shopping?.length < oils?.length) {
            const newArray = oils?.filter(element => shopping?.find(element2=>element2.id==element.id)?true:false)
            setOils(newArray)
        }
    }, [shopping])

    useEffect(()=>{
        if (checked?.length==0)
            setMainChecked(false)
    }, [checked])

    const funcForOneChecked = (id)=>{
        const newArray = checked.filter(element=>element!=id)
        if(newArray.length==checked.length)
            setChecked([...checked, id])
        else
            setChecked(newArray)
    }

    if (oils === 'loading')
        return (
            <main>
                <Container>
                    <NavBreadcrumbs pageName={'Корзина'}/>
                    <Loader color={'red'}/>
                </Container>
            </main>)
    else if (shopping?.length)
        return (
            <main>
                <Container>
                    <NavBreadcrumbs pageName={'Корзина'}/>
                    <div className={'p-3 p-sm-4 p-lg-5'}>
                        <div className={'shadow p-3 mb-5 bg-white rounded rounded-3 d-flex w-100 justify-content-between'}>
                            <div className={'d-flex justify-content-center align-items-center'}>
                                <input checked={mainChecked}
                                       onChange={()=>{
                                           setMainChecked(!mainChecked)
                                           setChecked(mainChecked?[]:oils?.map(element=>element.id))
                                       }}
                                       type="checkbox"/>
                                <div className={'px-1'}>Все товары</div>
                            </div>
                            <div onClick={()=>{dispatch(DeleteAllShopping(checked))}} className={'align-self-end float-end d-flex'}>
                                    <div>
                                        Удалить
                                    </div>
                                    <div className={'d-none d-sm-block'}>
                                        &nbsp;выбранные товары
                                    </div>
                            </div>
                        </div>

                        <Row xs={1} className="gx-3 gx-sm-4 gx-xl-5 gy-5">
                            {oils?.length > 0 && oils?.map((element, index) =>
                                <Col key={index}>
                                    <ProductForCard
                                        {...element}
                                        shop={shopping?.find(element2=>element2.id==element.id)}
                                        checked={checked?.find(element2=>element2==element.id)?true:false}
                                        funcForOneChecked={funcForOneChecked}
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
                    <NavBreadcrumbs pageName={'Корзина'}/>
                    <h1>Товаров не найдено</h1>
                </Container>
            </main>
        );
};

export default Cart;