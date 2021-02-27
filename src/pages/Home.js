
import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import Slider from '../components/Slider';
import CardItem from '../components/CardItem';
import Jumbotron from '../components/Jumbotron';
import GridWithImg from '../components/GridWithImg';


function Home() {
  return (
    <>
      <Slider />
      <div className="cardWrapper" style={{ backgroundColor: '#9e9e9e91', padding: '2rem' }}>
        <Container >
          <Row>
            <Col>
              <CardItem />
            </Col>
            <Col>
              <CardItem />
            </Col>
            <Col>
              <CardItem />
            </Col>
          </Row>
        </Container>
      </div>
      
      
        <Jumbotron />
        <GridWithImg />
     
      
      
    </>
  )
}
export default Home;