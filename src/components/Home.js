import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
            <h1 className="custom-violet">Welcome to Songano's Profile!</h1>
          <p>A 3rd-year Bachelor of Science in Computer Science (BSCS) student.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
