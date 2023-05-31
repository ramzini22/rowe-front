import React, {useRef, useState} from 'react';
import {useAppAction, useAppSelector} from "../store";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import img2 from "../assets/imgs/smallOkey.png";
import img3 from "../assets/imgs/bigOkey.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../assets/imgs/woman2.png";
import {useForm} from "react-hook-form";
import {SetConnect} from "../services/Connect";

const Request = () => {
    const requestShow = useAppSelector(state=>state.app.requestShow)
    const {setRequestShow}= useAppAction()
    const [requestMaded, setRequestMaded] = useState(false)
    const ref2 = useRef()
    const {
        formState: {errors},
        handleSubmit,
        register,
        setValue,
        getValues
    } = useForm()

    const createContact = (data) =>{
        SetConnect(data).then(res=>{
            if(res)
                setRequestMaded(true)
        })
    }

    if(!requestShow)
    return (
        <div>
            <Offcanvas show={!requestShow} onHide={()=>{setRequestShow();setTimeout(()=>setRequestMaded(false), 1000)}} placement={'top'}>
                <Offcanvas.Body ref={ref2}>
                    <Container className={'d-flex justify-content-center'}>
                        <form className={'zakaz'} onSubmit={handleSubmit(createContact)}>
                            {
                                requestMaded?
                                    <div>
                                        Заявка отправлена менеджеру!
                                    </div>
                                    :<Row xs={12}>
                                        <Col md={4} sm={0} className={'d-none d-md-inline-block'}>
                                            <img src={img1} style={{width:'100%', float:'left'}} />
                                        </Col>
                                        <Col md={8} sm={12}>
                                            <Row>
                                                Укажите контактные данные и менеджер свяется с вами в течение 15 минут
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
                                    </Row>
                            }
                        </form>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default Request;