import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBreadcrumbs from '../components/NavBreadcrumbs';

const Article = () => {
  return (
    <main>
      <Container>
        <NavBreadcrumbs/>

        <section className='sec-13 mb-custom'>
          <h1 className='inner'>Заголовок интересных новостей</h1>
          <div className="text">
            <img src="imgs/img6.jpg" alt="Заголовок интересных новостей" />
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et qua atque corrupti quos dolores et qua atque corrupti quos dolores et qua</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.</p>
          </div>
        </section>

        <section className='sec-5 mt-small mb-sm-4 mb-md-5'>
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
      </Container>
    </main>
  );
};

export default Article;