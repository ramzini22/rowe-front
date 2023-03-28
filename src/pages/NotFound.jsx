import React from 'react';
import Container from 'react-bootstrap/Container';

const NotFound = () => {
  return (
    <main>
      <Container>
        <h1>404</h1>
        <h4 className='text-center'>Страница не найдена</h4>
      </Container>
    </main>
  );
};

export default NotFound;