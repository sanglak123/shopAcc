import Account from '@/components/Account';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import News from './news';

function Home(props) {
  return (
    <div id='hom_page'>
      <Container>
        <News />
        <div className='lmht_new'>
          <Row>
            <Col xs={3}>
              <Account />
            </Col>
          </Row>
        </div>

      </Container>
    </div>
  );
}

export default Home;