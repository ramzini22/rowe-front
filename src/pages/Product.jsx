import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import CategoryPill from '../components/CategoryPill';
import useIsMobile from '../hooks/isMobile';
import FavoritesIcon from '../components/svg/FavoritesIcon';
import {Link, useParams} from 'react-router-dom';
import {useAppAction, useAppSelector} from "../store";
import {GetOilsByIds, GetOneOil} from "../services/Oils";
import FunctionForPrice from "../helpers/FunctionForPrice";

const o = {
    "id": 1,
    "name": "HIGHTEC GTS SPEZIAL SAE 20W-50",
    "price": 890,
    "article": 3630477,
    "image": "products/asd9f91asf-img1.png",
    optionIds: [
        {name: 'Серия продуктов', value: 'Hightec'},
        {name: 'Соответствия', value: 'API SF/CD,CCMC D2/G2,MIL-L-2104D,SAE 20W-50'},
        {name: 'Вязкость по SAE', value: '20W-50'},
        {name: 'Вид масла', value: 'минеральное'},
        {name: 'Тип двигателя', value: 'бензиновый, дизельный'},
    ]

}

const Product = () => {
    const {mobile} = useIsMobile('991px');
    const {id} = useParams()
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const {ChangeFavorites, ChangeShopping} = useAppAction()
    const categories = useAppSelector(state => state.app.categories)
    const [oil, setOil] = useState(o)
    const fav = favorites?.find(el => el == id)
    const shop = shopping?.find(el => el == id)

    useEffect(() => {
        GetOilsByIds([id]).then(res=>{
            if(res){
                const [oil] = res
                if(oil){
                    setOil(oil)
                }
            }
        })
    }, [])
    return (
        <main>
            <Container>
                <NavBreadcrumbs/>

                {
                    (!mobile) &&
                    <section className='sec-8 mb-custom'>
                        <ul>
                            {categories?.map((element, index) =>
                                <li key={index}>
                                    <li><CategoryPill {...element} /></li>
                                </li>
                            )}

                        </ul>
                    </section>
                }

                <section className='sec-12 mb-sm-4 mb-md-5'>
                    <Row className='g-4 g-xxl-5'>
                        <Col sm={4} lg={3}>
                            <img src="../../imgs/img13.png" alt="HIGHTEC GTS SPEZIAL SAE 20W-50"/>
                        </Col>
                        <Col sm={8} lg={5} xxl={6}>
                            <h1 className='inner'>{oil?.name}</h1>
                            <small className='fw-5'>Артикул: {oil?.article}</small>
                            <ul className='specification list-unstyled'>
                                {oil?.optionIds?.map((element, index) =>
                                    <li key={index}><strong
                                        className='me-2 me-xl-3'>{element?.name}</strong>{element?.value}</li>
                                )}
                                <li><strong className='me-2 me-xl-3'>Серия продуктов</strong> Hightec</li>
                                <li><strong className='me-2 me-xl-3'>Соответствия</strong> API SF/CD,CCMC D2/G2,MIL-L-2104D,SAE 20W-50</li>
                                <li><strong className='me-2 me-xl-3'>Вязкость по SAE</strong> 20W-50</li>
                                <li><strong className='me-2 me-xl-3'>Вид масла</strong> минеральное</li>
                                <li><strong className='me-2 me-xl-3'>Тип двигателя</strong> бензиновый, дизельный</li>
                            </ul>
                        </Col>
                        <Col sm={{span: 8, offset: 4}} lg={{span: 4, offset: 0}} xxl={3}>
                            <h4>Выберите фасовку</h4>
                            <ul className='packaging-list'>
                                <li>
                                    <label>
                                        <input type="radio" name="packaging" hidden/>
                                        <div>1Л</div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="packaging" hidden/>
                                        <div>5Л</div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="packaging" hidden/>
                                        <div>20Л</div>
                                    </label>
                                </li>
                            </ul>
                            <div className="box mt-4">
                                <div>
                                    <h4>{FunctionForPrice(oil?.price)+' ₽'}</h4>
                                    <h6>{oil?.priceWithoutDiscount && FunctionForPrice(oil?.priceWithoutDiscount)+' ₽'}</h6>
                                </div>
                                <button type='button' className={`btn-2 ${shop ? 'btn2-active' : ''}`}
                                        onClick={() => ChangeShopping(id)}>
                                    {shop ? 'В корзине' : 'В корзину'}
                                </button>
                                <button type='button' className={fav ? 'btn-fav checked' : 'btn-fav'}
                                        onClick={() => ChangeFavorites(id)}>
                                    <FavoritesIcon/>
                                </button>
                            </div>
                            <small className='d-block fw-5'><Link to='/catalog' className='link'>Все товары категории
                                Для легковых авто</Link></small>
                        </Col>
                        <Col sm={12} lg={9}>
                            <div className="text">
                                <p>Всесезонное моторное масло, изготовленное на основе высококачественных базовых масел
                                    класса SAE 20W-50.</p>
                                <ul>
                                    <li>Идеально подходит для турбированных двигателей</li>
                                    <li>Предотвращает образование липких осадков, лакообразование и закоксовование
                                        деталей ЦПГ, ГРМ и турбонагнетателей
                                    </li>
                                    <li>Особенно хорошо подходит для использования в жарком климате</li>
                                    <li>Прочная масляная плёнка даже при высоких нагрузках</li>
                                    <li>Высокоэффективная антиокислительная защита за счёт сочетания базовых масел</li>
                                    <li>Отличная бесперебойная работа гидрокомпенсаторов клапанов</li>
                                    <li>Возможность смешивания и отличная совместимость с минеральными моторными маслами
                                        такого же класса вязкости и уровня эксплуатационных свойств. Однако для того
                                        чтобы воспользоваться всеми преимуществами, рекомендуется провести полную замену
                                        масла.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default Product;