import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
const HomeBlankPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    return <>
        <div className='center'>
            <Container>
                <Row>
                    <Col >
                        <div className='center' style={{ margin: 'auto' }}>
                            <h1>
                                Please Enter Your Name <span className="p-float-label">
                                    <InputText id="username" value={name} className="p-inputtext-sm block mb-2" placeholder="Username" onChange={(e) => setName(e.target.value)} />
                                </span>
                            </h1>
                            {name !== "" && <Button disabled={name === ""} onClick={() => navigate('/' + name)}>Click here to continue</Button>}
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

export default HomeBlankPage;