import React, { Component } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    sessionStorage.setItem('user', id);
    return <>
        <div className='center'>
            <Container>
                <Row>
                    <Col >
                        <div className='center' style={{ margin: 'auto' }}>
                            <h1>
                                Welcome {id}
                            </h1>
                            <h1>
                                To Personality Quiz
                            </h1>
                            <Button onClick={() => navigate('/quiztypes')}>Click here to continue</Button>
                        </div>
                    </Col>
                    <Col >
                        <Image src="assets/peopleStanding.jpeg" />
                    </Col>
                </Row>
            </Container>

        </div>
    </>;
}

export default HomePage;