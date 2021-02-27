import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
      <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eius temporibus modi, repellat adipisci harum fuga facilis fugiat magni voluptatem omnis quis, molestiae obcaecati, deleniti pariatur fugit commodi cum quisquam.</p>
      </Container>
    </Container>
  )
}