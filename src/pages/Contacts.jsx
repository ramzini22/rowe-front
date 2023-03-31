import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactsFillIcon from '../components/svg/ContactsFillIcon';
import Wapp from '../components/svg/Wapp';
import useIsMobile from '../hooks/isMobile';
import NavBreadcrumbs from '../components/NavBreadcrumbs';

const Contacts = () => {
  const {mobile} = useIsMobile('991px');

  return (
    <main>
      <Container>
        <NavBreadcrumbs/>

        <section className='sec-10'>
          <Row className='gx-4 gx-lg-5'>
            <Col xs={12} lg={4}>
              <h1 className='inner'>ООО “РавеоилКЗН” </h1>
              <a href="tel:+79872126076" className='phone'>
                <ContactsFillIcon/>
                <span className='fw-7 ms-2'>+7-987-212-60-76</span>
              </a>
              <address className='mt-3 mb-4'>г. Казань, ул. Родины 37</address>
              {
                (mobile) &&
                <iframe title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A88fb796c1b3edb68fae80f64766a89d0d70d232b285986860bd2460ed54aba9d&amp;source=constructor" width="100%" height="280" frameborder="0"></iframe>
              }
              <a href="tel:+79872126076" className='btn-1 w-100 mt-4'>
                <ContactsFillIcon/>
                <span>Позвонить</span>
              </a>
              <a href="tel:+79872126076" className='btn-2 w-100 mt-3'>
                <Wapp/>
                <span>Написать в WhatsApp</span>
              </a>
            </Col>
            {
              (!mobile) &&
              <Col lg={8}>
                <iframe title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A88fb796c1b3edb68fae80f64766a89d0d70d232b285986860bd2460ed54aba9d&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
              </Col>
            }
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Contacts;