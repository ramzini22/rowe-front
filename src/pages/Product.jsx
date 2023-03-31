import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import CategoryPill from '../components/CategoryPill';
import useIsMobile from '../hooks/isMobile';
import FavoritesIcon from '../components/svg/FavoritesIcon';
import {Link} from 'react-router-dom';

const Product = () => {
  const {mobile} = useIsMobile('991px');
  const [fav, setFav] = useState(false);

  return (
    <main>
      <Container>
        <NavBreadcrumbs/>

        {
          (!mobile) &&
          <section className='sec-8 mb-custom'>
            <ul>
              <li><CategoryPill img={"imgs/img2.jpg"} title={'Для легковых авто'}/></li>
              <li><CategoryPill img={"imgs/img3.jpg"} title={'Гоночные масла'}/></li>
              <li><CategoryPill img={"imgs/img4.jpg"} title={'Спецтехника'}/></li>
              <li><CategoryPill img={"imgs/img5.jpg"} title={'Мотоциклы и водный транспорт'}/></li>
              <li><CategoryPill img={"imgs/img6.jpg"} title={'Для коммерческого транспорта'}/></li>
              <li><CategoryPill imgClassName={'bg'} img={"imgs/img7.png"} title={'Индустрия'}/></li>
            </ul>
          </section>
        }

        <section className='sec-12 mb-sm-4 mb-md-5'>
          <Row className='g-4 g-xxl-5'>
            <Col sm={4} lg={3}>
              <img src="imgs/img13.png" alt="HIGHTEC GTS SPEZIAL SAE 20W-50"/>
            </Col>
            <Col sm={8} lg={5} xxl={6}>
              <h1 className='inner'>HIGHTEC GTS SPEZIAL SAE 20W-50</h1>
              <small className='fw-5'>Артикул: 3630477</small>
              <ul className='specification list-unstyled'>
                <li><strong className='me-2 me-xl-3'>Серия продуктов</strong> Hightec</li>
                <li><strong className='me-2 me-xl-3'>Соответствия</strong> API SF/CD,CCMC D2/G2,MIL-L-2104D,SAE 20W-50</li>
                <li><strong className='me-2 me-xl-3'>Вязкость по SAE</strong> 20W-50</li>
                <li><strong className='me-2 me-xl-3'>Вид масла</strong> минеральное</li>
                <li><strong className='me-2 me-xl-3'>Тип двигателя</strong> бензиновый, дизельный</li>
              </ul>
            </Col>
            <Col sm={{span:8, offset:4}} lg={{span:4, offset:0}} xxl={3}>
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
                  <h4>930 ₽</h4>
                  <h6>1 140 ₽</h6>
                </div>
                <button type='button' className='btn-2'>В корзину</button>
                <button type='button' className={(fav)?'btn-fav checked':'btn-fav'} onClick={()=>setFav(!fav)}>
                  <FavoritesIcon/>
                </button>
              </div>
              <small className='d-block fw-5'><Link to='/catalog' className='link'>Все товары категории Для легковых авто</Link></small>
            </Col>
            <Col sm={12} lg={9}>
              <div className="text">
                <p>Всесезонное моторное масло, изготовленное на основе высококачественных базовых масел класса SAE 20W-50.</p>
                <ul>
                  <li>Идеально подходит для турбированных двигателей</li>
                  <li>Предотвращает образование липких осадков, лакообразование и закоксовование деталей ЦПГ, ГРМ и турбонагнетателей</li>
                  <li>Особенно хорошо подходит для использования в жарком климате</li>
                  <li>Прочная масляная плёнка даже при высоких нагрузках</li>
                  <li>Высокоэффективная антиокислительная защита за счёт сочетания базовых масел</li>
                  <li>Отличная бесперебойная работа гидрокомпенсаторов клапанов</li>
                  <li>Возможность смешивания и отличная совместимость с минеральными моторными маслами такого же класса вязкости и уровня эксплуатационных свойств. Однако для того чтобы воспользоваться всеми преимуществами, рекомендуется провести полную замену масла.</li>
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