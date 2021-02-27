import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import style from '../styes/Jumbotron.module.css';
import ocean from '../img/ocean.jpg'

export default function Jumbotron() {
  return (
    <>
      <Jumbo fluid className={style.jumbo} 
      style={{background: `url(${ocean}) no-repeat fixed bottom`}}>
        <div className={style.overlay}></div>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
    </p>
        </Container>
      </Jumbo>
    </>
  )
} 