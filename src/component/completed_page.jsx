import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { useNavigate, useParams } from 'react-router-dom';
const CompletedPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    return <>
        <div className='center'>
            <Container >
                <Row >
                    <Col >
                        <div className='center' style={{ margin: 'auto' }}>
                            <h1>
                                Congratulations {sessionStorage.getItem("user")}
                            </h1>
                            <h1>
                                For completing {id}  test
                            </h1>
                            <Button onClick={() => navigate('/quiztypes')}>Click here to continue</Button>

                        </div>
                    </Col>
                    <Col >
                        <Image src={window.location.origin + "/assets/questionMark.jpeg"} />
                    </Col>
                </Row>
            </Container>
        </div>

    </>;
}

export default CompletedPage;