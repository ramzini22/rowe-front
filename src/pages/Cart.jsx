import React, {useEffect, useRef, useState} from 'react';
import {useAppAction, useAppSelector} from "../store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {GetOilsByIds} from "../services/Oils";
import Loader from "../components/Loader";
import NavBreadcrumbs from "../components/NavBreadcrumbs";
import {useDispatch} from "react-redux";
import ProductForCard from "../components/ProductForCard";
import {RiDeleteBin6Line} from 'react-icons/ri'
import FunctionForPrice from "../helpers/FunctionForPrice";
import Offcanvas from "react-bootstrap/Offcanvas";
import {useForm} from "react-hook-form";
import {CreateOrder} from "../services/order";
import img2 from '../assets/imgs/smallOkey.png'
import img3 from '../assets/imgs/bigOkey.png'
import img1 from '../assets/imgs/woman.png';
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const [oils, setOils] = useState()
    const {DeleteAllShopping} = useAppAction()
    const dispatch = useDispatch()
    const [checked, setChecked] = useState([])
    const [mainChecked, setMainChecked] = useState(false)
    const [sum, setSum] = useState(0)
    const [sumOfZakaz, setSumOfZakaz] = useState()
    const [showPreZakaz, setShowPreZakaz] = useState(false);
    const [zakaz, setZakaz] = useState();
    const ref2 = useRef();
    const navigate = useNavigate()
    const {
        formState: {errors},
        handleSubmit,
        register,
        setValue,
        getValues
    } = useForm()

    useEffect(() => {
        if (shopping?.length > 0) {
            setOils('loading')
            GetOilsByIds(shopping.map(element => element.id))
                .then(res => {
                    if (res){
                        setOils(res)
                        setMainChecked(!mainChecked)
                        setChecked(res?.map(element => element.id))
                    }
                    else
                        setOils(null)
                })
        }
    }, [])

    useEffect(() => {
        if (shopping?.length < oils?.length) {
            const newArray = oils?.filter(element => shopping?.find(element2 => element2.id == element.id) ? true : false)
            setOils(newArray)
        }
    }, [shopping])

    useEffect(() => {
        if (checked.length == shopping.length)
            setMainChecked(true)
        else
            setMainChecked(false)
    }, [checked])

    useEffect(() => {
        if (oils) {
            setSum(checked?.reduce((oldValue, id) => oldValue + oils?.find(element => element.id == id)?.price * shopping?.find(element => element.id == id)?.count, 0))
        }
    }, [checked, shopping])

    const funcForOneChecked = (id) => {
        const newArray = checked.filter(element => element != id)
        if (newArray.length == checked.length)
            setChecked([...checked, id])
        else
            setChecked(newArray)
    }

    console.log(zakaz)
    const CreateZakaz = (data) => {
        setSumOfZakaz(sum)
        const products = shopping
            ?.filter(element => checked?.find(el => el == element.id) ? true : false)
            ?.map(element => ({"productId": element.id, "amount": element.count}))
        const request = {...data, products}
        dispatch(CreateOrder(request)).then(({payload: {response}}) => {
            if (response) {
                setSumOfZakaz(sum)
                setChecked([])
                setZakaz(response)
            } else {
                alert('Произошла ощибка')
            }
        })
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
                    <div><h3>В
                        корзине {shopping?.length} {shopping?.length % 10 == 1 ? 'товар' : shopping?.length % 10 > 4 ? 'товаров' : 'товара'} </h3>
                    </div>
                    <div className={''}>
                        <Row xs={12}>
                            <Col md={12} lg={8}>
                                <div
                                    className={'shadow p-3 mb-5 bg-white rounded rounded-3 d-flex w-100 justify-content-between'}>
                                    <div className={'d-flex justify-content-center align-items-center'}>
                                        <input checked={mainChecked}
                                               onChange={() => {
                                                   setMainChecked(!mainChecked)
                                                   setChecked(mainChecked ? [] : oils?.map(element => element.id))
                                               }}
                                               type="checkbox"/>
                                        <div className={'px-1'}>Все товары</div>
                                    </div>
                                    <div
                                        onClick={() => {
                                            checked?.length > 0 && dispatch(DeleteAllShopping(checked))
                                        }}
                                        className={'align-self-end float-end d-flex'}
                                        style={{cursor: "pointer"}}
                                    >
                                        <div className={'px-2'}><RiDeleteBin6Line/></div>
                                        <div>
                                            Удалить
                                        </div>
                                        <div className={'d-none d-sm-block'}>
                                            &nbsp;выбранные товары
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row xs={12} className="gx-3 gx-sm-4 gx-xl-5 gy-5">
                            <Col md={12} lg={8}>
                                {oils?.length > 0 && oils?.map((element, index) =>
                                    <div key={index}>
                                        <ProductForCard
                                            {...element}
                                            fav={favorites?.find(el => el == element?.id)}
                                            shop={shopping?.find(element2 => element2.id == element.id)}
                                            checked={checked?.find(element2 => element2 == element.id) ? true : false}
                                            funcForOneChecked={funcForOneChecked}
                                        />
                                    </div>
                                )}
                            </Col>
                            <Col xs={4} className={'h-25'}>
                                <div className={'px-0 px-lg-1 zakaz-div1'}>
                                    <div className={'zakaz-div2 d-flex p-3 align-items-center'}>
                                        <div>
                                            Заказ
                                            <div>
                                                {'на сумму: '}
                                                <font>{sum ? FunctionForPrice(sum) : '0'} ₽</font>
                                            </div>
                                        </div>
                                        <div className={'flex-grow-1'}></div>
                                        <button
                                            className={`btn-2 ${checked?.length != 0 ? 'btn2-active' : ''}`}
                                            onClick={() => checked?.length != 0 && setShowPreZakaz(true)}>Оформить
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Offcanvas show={showPreZakaz} onHide={() => {setShowPreZakaz(false);setZakaz(undefined);setSumOfZakaz(undefined)}} placement={'top'}>
                    <Offcanvas.Body ref={ref2}>
                        <Container className={'d-flex justify-content-center'}>
                            <form onSubmit={handleSubmit(CreateZakaz)} className={'zakaz'}>
                                {zakaz ?
                                    <div>
                                        <div className={'d-none d-lg-block'} style={{float:'right'}}><img src={img2} /></div>
                                        <div className={'d-md-block d-lg-none'} style={{width:'100%'}}><img className={'w-100'} src={img3} /></div>
                                        <div className={'py-2 py-lg-0'}>
                                            <h4>Уникальный ID заказа: <font>{zakaz?.id}</font></h4>
                                        </div>
                                        <div>
                                            Заказ на сумму {sumOfZakaz} ₽ отправлен на обработку
                                        </div>
                                        <button
                                            type={'button'}
                                            onClick={()=>{setShowPreZakaz(false);setZakaz(undefined)}}
                                            className={`btn-2 btn2-active my-3`}
                                        >
                                            Вернуться в каталог
                                        </button>
                                    </div>
                                    : <Row xs={12}>
                                        <Col md={7} sm={12}>
                                            <Row>
                                                Укажите контактные данные и менеджер свяется с вами чтобы подтвердить
                                                заказ.
                                            </Row>
                                            <Row xs={12} className={'py-4'}>
                                                <Col md={6} sm={7} className={'p-0'}>
                                                    <input
                                                        type={'text'}
                                                        placeholder={'Имя'}
                                                        style={errors?.lastName && {border: '2px solid red'}}
                                                        {...register("lastName", {required: true})}
                                                    />
                                                </Col>
                                                <Col md={6} sm={7} className={'py-1 py-md-0 px-0 px-md-1'}>
                                                    <input
                                                        type={'tel'}
                                                        placeholder={'Номер телефона'}
                                                        onFocus={() => {
                                                            if (!getValues('phone')) setValue('phone', '+7')
                                                        }}
                                                        style={errors?.phone && {border: '2px solid red'}}
                                                        {...register("phone", {
                                                            required: true,
                                                            onChange: ({target: {value}}) => setValue('phone', `+7${getValues('phone')?.slice(2, 12)}`)
                                                        })}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className={'py-2'}>
                                                Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных
                                                данных
                                            </Row>
                                            <Row>
                                                <button
                                                    type={'submit'}
                                                    className={`btn-2 btn2-active`}
                                                >
                                                    Отправить
                                                </button>
                                            </Row>
                                        </Col>
                                        <Col md={5} sm={0} className={'d-none d-md-inline-block'}>
                                            <img src={img1} style={{width:'80%', float:'right'}} />
                                        </Col>
                                    </Row>
                                }
                            </form>
                        </Container>
                    </Offcanvas.Body>
                </Offcanvas>

            </main>
        );
    else
        return (
            <main>
                <Container>
                    <NavBreadcrumbs pageName={'Корзина'}/>
                    <h1>Товаров не найдено</h1>
                </Container>
                <Offcanvas show={showPreZakaz} onHide={() => setShowPreZakaz(false)} placement={'top'}>
                    <Offcanvas.Body ref={ref2}>
                        <Container className={'d-flex justify-content-center'}>
                            <form onSubmit={handleSubmit(CreateZakaz)} className={'zakaz'}>
                                {zakaz &&
                                    <div>
                                        <div className={'d-none d-lg-block'} style={{float:'right'}}><img src={img2} /></div>
                                        <div className={'d-md-block d-lg-none'} style={{width:'100%'}}><img className={'w-100'} src={img3} /></div>
                                        <div className={'py-2 py-lg-0'}>
                                            <h4>Уникальный ID заказа: <font>{zakaz?.id}</font></h4>
                                        </div>
                                        <div>
                                            Заказ на сумму {sumOfZakaz} ₽ отправлен на обработку
                                        </div>
                                        <button
                                            type={'button'}
                                            onClick={()=>{setShowPreZakaz(false);setZakaz(undefined);navigate('/catalog')}}
                                            className={`btn-2 btn2-active my-3`}
                                        >
                                            Вернуться в каталог
                                        </button>
                                    </div>
                                }
                            </form>
                        </Container>
                    </Offcanvas.Body>
                </Offcanvas>
            </main>
        );
};

export default Cart;