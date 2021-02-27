import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ocean from '../img/ocean.jpg';

export default function GridWithImg() {
  return (
   
      <Container style={{ marginBottom: '30px' }}>
        <Row>
          <Col md={7}>
            <img src={ocean} alt="ocean" height={400} />
          </Col>
          <Col md={5}>
            <h2>Web dev</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum aut officiis, vero ea aspernatur excepturi inventore velit fuga quam a nisi eveniet placeat quasi ad, aliquam repudiandae ipsam qui?</p>
          </Col>
        </Row>
      </Container>
  
  )

}