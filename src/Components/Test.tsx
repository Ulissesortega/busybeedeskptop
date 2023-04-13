import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ExampleLayout() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col xs={5} className="text-center">
          <p>Column 1</p>
        </Col>
        <Col xs={1} className="bg-black">
          <div className="w-100"></div>
        </Col>
        <Col xs={5} className="text-center">
          <p>Column 2</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ExampleLayout;
