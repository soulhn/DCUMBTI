import React from 'react'
import styled from 'styled-components'
import {ProgressBar, Button} from 'react-bootstrap'
import { createSearchParams, Navigate, useNavigate } from 'react-router-dom'
import { QuestionData } from '../assets/data/questiondata'


const Question = () => {
    const [questionNO, setQuestionNo] = React.useState(0);
    const [totalScore, setTotalScore] = React.useState([
        { id : "EI", score : 0},
        { id : "SN", score : 0},
        { id : "TF", score : 0},
        { id : "JP", score : 0},
    ])

    const navigate = useNavigate() ;

    //버튼 클릭 시 1 추가함
    const handleClickButton = (no, type) =>{
        const newScore = totalScore.map((s) => 
        s.id === type ? {id: s.id, score: s.score + no } : s
    );
        setTotalScore(newScore);
        //다음 문제 문제 수 증가
        if(QuestionData.length !== questionNO + 1) {
            setQuestionNo(questionNO + 1);
        } else {
            //mbti 도출 
            const mbti = newScore.reduce(
                (acc, curr) =>
                acc + (curr.score >= 2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),
                ""
            );

            //결과 페이지로 이동~
            navigate({
                pathname : "/result",
                search : `?${createSearchParams({
                    mbti : mbti,
                })}`
            });

        }
     


        // if(type === "EI"){
        //             //기존 스코어 (기존의 값 + 배점)
        //     const addScore = totalScore[0].score + no;
        //     //새로운 객체 생성
        //     const newObject = { id : "EI", score : addScore};
        //     // splice 사용 새로운 객체를 기존 객체에 
        //     totalScore.splice(0, 1, newObject);

        // } else if (type ==="SN"){
        //     const addScore = totalScore[1].score + no;
        //     const newObject = { id : "SN", score : addScore};
        //     totalScore.splice(1, 1, newObject);
        // }else if (type ==="TF"){
        //     const addScore = totalScore[2].score + no;
        //     const newObject = { id : "TF", score : addScore};
        //     totalScore.splice(2, 1, newObject);
        // }else {
        //     const addScore = totalScore[3].score + no;
        //     const newObject = { id : "JP", score : addScore};
        //     totalScore.splice(3, 1, newObject);
        // }



    }


    return (
        //https://react-bootstrap.netlify.app/components/progress/#progress-bars에서 디자인 변경 할 예정
        //프로그레스바
        <Wrapper>
            
            <ProgressBar striped variant="success" now={(questionNO / QuestionData.length)*100 } style={{marginTop: '20px'}} />
            <Title>{QuestionData[questionNO].title}</Title>
            
            <ButtonGroup>
                <Button onClick={() => handleClickButton(1, QuestionData[questionNO].type)} style={{width : "40%", minHeight : "200px", fontSize : "15pt"}}>{QuestionData[questionNO].answera}</Button>
                <Button onClick={() => handleClickButton(0, QuestionData[questionNO].type)} style={{width : "40%", minHeight : "200px", fontSize : "15pt", marginLeft: "20px"}}>{QuestionData[questionNO].answerb}.</Button>
            </ButtonGroup>

        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
    background-color : #99b3ff;
    height : 100vh;
    width : 100%;

`

const Title = styled.div`
    font-size : 30pt;
    text-align : center;
    font-family : "SimKyungha";
`

const ButtonGroup = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    font-family : "SimKyungha";

`
