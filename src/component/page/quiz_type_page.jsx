import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getQuizType, getUserStatus } from '../../api/userApi';

const QuizTypePage = () => {
    const [completed, setCompleted] = useState([])
    const [quizType, setQuizType] = useState([])
    const [progress, setProgress] = useState([])
    const [progressDone, setProgressDone] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        getQuizType().then(res => {
            setQuizType(res.data.data);
        })
        getUserData();
    }, []);
    const getUserData = () => {

        getUserStatus().then(res => {

            setCompleted(res.data.data.completed);
            const progressField = [];
            const progressvalue = {};
            res.data.data.progress !== undefined && res.data.data.progress.map(val => {
                progressField.push(val.quiz_type);
                progressvalue[val.quiz_type] = (val.done / 5) * 100;
            })
            setProgress(progressField)
            setProgressDone(progressvalue);
        });
    }
    return <>
        <div className='center'>
            <Container >
                <Row >
                    <Col style={{ marginTop: "200px" }}>
                        {quizType.map(data => <Card style={{ paddingBottom: "10px", marginBottom: "10px" }} onClick={() => completed !== undefined && completed !== null && completed.length > 0 && completed.includes(data.id) ? navigate('/completed/' + data.type_name) : navigate('/quiz/' + data.id)}>
                            <Card.Header >
                                {data.type_name}
                            </Card.Header>
                            <ProgressBar variant="success" now={completed !== undefined && completed !== null && completed.length > 0 && completed.includes(data.id) ? 100 : progress !== undefined && progress.length > 0 && progress.includes(data.id) ? progressDone[data.id] : 0} />
                        </Card>)}
                    </Col>
                    <Col >
                        <Image src="assets/peopleStanding.jpeg" />
                    </Col>
                </Row>
            </Container>
        </div>

    </>;
}

export default QuizTypePage;