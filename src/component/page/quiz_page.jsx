import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';
import { assignQuestions, getAssignQuestions, getUserStatus, setUserStatus, updateAssignQuestions } from '../../api/userApi';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { useNavigate, useParams } from 'react-router-dom';
const QuizPage = () => {
    const [question, setQuestion] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();
    const [page, setPage] = useState(0)
    const [selected, setSelected] = useState({})
    const [setid, setSetid] = useState("")
    useEffect(() => {
        assignQuestions(id).then((res) => {
            setSetid(res.data.data)
            assignedQuestions();
        }).catch(() => assignedQuestions())
    }, []);
    const assignedQuestions = () => {
        getAssignQuestions(id).then((res) => {
            setQuestion(res.data.data["quiz_id"]);
            const quizArray = res.data.data["quiz_id"];
            if (quizArray[0].selected_answer !== "") {
                let set = selected
                for (let i in quizArray) {

                    if (quizArray[i].selected_answer !== "") {
                        set[i] = quizArray[i].selected_answer;
                    }
                }
                setSelected(JSON.parse(JSON.stringify(set)));
            } else {
                addProgress(0);
            }
        });
    }
    const addProgress = (ques) => {
        setUserStatus(id, ques);
    }
    const selectAns = (val) => {
        const sel = selected;
        sel[page] = val;
        setSelected(JSON.parse(JSON.stringify(sel)));
        addProgress(page + 1);
        updateAssignQuestions(setid, val, page)
    }
    return <>
        <div className='center'>
            <Container >
                <Row >
                    <Col >
                        {page < 5 ? question !== undefined && question[page] !== undefined && <Card style={{ marginTop: "200px", paddingBottom: "10px" }}>
                            <h3>{question[page].question}</h3>
                            {question[page].options.map((res, id) => <div key={id} className="field-radiobutton" style={{ marginTop: "10px" }}>
                                <RadioButton inputId={id} name={"ans" + id} value={res} onChange={(e) => selectAns(e.value)} checked={selected[page] === res} />
                                <label htmlFor={id} style={{ marginLeft: "10px" }}>{res}</label>
                            </div>)}
                            <div className="row" style={{ marginTop: "20px" }}>
                                <div className='col-8' ></div>
                                <div className='col-4'> {page > 0 && <Button label="Prev" style={{ marginLeft: "auto", padding: "3px" }} onClick={() => setPage(page - 1)} />}{page < 4 && <Button label="Next" style={{ marginLeft: "10px", padding: "3px" }} onClick={() => setPage(page + 1)} />}{page === 4 && <Button label="submit" style={{ marginLeft: "10px", padding: "3px" }} onClick={() => setPage(page + 1)} />}</div>

                            </div>
                        </Card> : <div className='center' style={{ margin: 'auto' }}>
                            <h1>
                                Congratulations {sessionStorage.getItem("user")}
                            </h1>
                            <h1>
                                For completing this test
                            </h1>
                            <Button onClick={() => navigate('/quiztypes')}>Click here to continue</Button>

                        </div>}
                    </Col>
                    <Col >
                        <Image src={window.location.origin + "/assets/questionMark.jpeg"} />
                    </Col>
                </Row>
            </Container>
        </div>

    </>;
}

export default QuizPage;