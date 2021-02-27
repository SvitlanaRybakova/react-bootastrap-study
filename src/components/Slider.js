import React from 'react';
import { Carousel } from 'react-bootstrap';
import ocean from '../img/ocean.jpg'


export default function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
          <img
            className="d-block h-100 w-100"
            src={ocean}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>This is ocean</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
          <img
            className="d-block  h-100 w-100"
            src={ocean}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>This is ocean</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
          <img 
            className="d-block  h-100 w-100"
            src={ocean}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>This is ocean</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )

}