import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './activeu.css';
import randomColor from 'randomcolor';

const Activeu = () => {
  const userData = [
    { name: 'Ahmed' },
    { name: 'Mir' },
    { name: 'Naseeb' },
    { name: 'John' },
    { name: 'Ali' },
    { name: 'Hassan' },
    { name: 'Naseeb' },
    { name: 'John' },
    { name: 'Ahmed' },
    { name: 'Mir' },
    { name: 'Naseeb' },
    { name: 'John' },
    { name: 'Naseeb' },
    { name: 'John' },
    { name: 'Olivia' }
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6} lg={4}>
          <div id='aubg'>
            <div id='au1'>
              <h1 id='a1'>Active Users</h1>
            </div>
            <div className="activeUWrapper">
              <div id='activeU'>
                {userData.map((user, index) => (
                  <div className='activeusersbackground' key={index}>
                    <div className='activeusericons' style={{ backgroundColor: randomColor() }}></div>
                    <span>{user.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Activeu;
