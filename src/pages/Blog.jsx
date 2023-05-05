import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsPreview2 from '../components/NewsPreview2';
import NavBreadcrumbs from '../components/NavBreadcrumbs';

const Blog = () => {
  return (
    <main>
      <Container>
        <NavBreadcrumbs pageName={'Блог'}/>

        <section className='sec-5 mt-small mb-custom'>
          <Row>
            <Col xs={12} md={7}>
              <h2 className='h1'>Получите моторное масло HIGHTEC SYNT RSV SAE 0W-20 в подарок</h2>
              <h5>Акция действует при покупке смазки HIGHTEC RACING GREASEGUARD RLF2</h5>
            </Col>
            <Col xs={12} md={5} className="mt-4 mt-md-0">
              <img src="imgs/img9.png" alt="HIGHTEC SYNT RSV SAE 0W-20" />
            </Col>
          </Row>
        </section>

        <section className='sec-11 mb-sm-4 mb-md-5'>
          <Row>
            <Col xxl={11}>
              <ul className="news-list-2">
                <li>
                  <NewsPreview2 img={"imgs/img5.jpg"} title={"At vero eos et accusamus et iusto"} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias'}/>
                </li>
                <li>
                  <NewsPreview2 img={"imgs/img6.jpg"} title={"At vero eos et accusamus et iusto"} text={'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'}/>
                </li>
                <li>
                  <NewsPreview2 img={"imgs/img2.jpg"} title={"At vero eos et accusamus et iusto"} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias'}/>
                </li>
                <li>
                  <NewsPreview2 img={"imgs/img4.jpg"} title={"At vero eos et accusamus et iusto"} text={'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'}/>
                </li>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Blog;