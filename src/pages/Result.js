import React from 'react'
//css를 자바스크립트에서 사용
import styled from 'styled-components'
import PangImage from '../assets/ggompang.jpeg'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ResultData } from '../assets/data/resultdata'

const Result = () => {
    const navigate = useNavigate();

    return (    
    <Wrapper>
        <Header>대구가톨릭대학교 MBTI TEST</Header>
        <Contents>
            <Title>결과 보기</Title>
            <LogoImage>
                <img src={ResultData[0].image} className="rounded-circle" width={350} height={350}/>
            </LogoImage>
            <Desc>나의 MBTI는 !? {ResultData[0].name}</Desc>
            <Button style={{fontFamily : "SimKyungha"}} onClick={() => navigate("/")} >
                
                테스트 다시하기</Button>
        </Contents>
    </Wrapper>
    )
}

export default Result;


const Wrapper = styled.div`
    background-color : pink;
    height : 100vh;
    width : 100%;

`

const Header = styled.div`
    font-size : 40pt;
    display : flex;
    justify-content: center;
    align-items : center;
    font-family : "SimKyungha"

`
const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items : center;
    flex-direction : column;
`

const Title = styled.div`
    font-size : 30pt;
    margin-top : 40px;
    font-family : "SimKyungha"
`

const LogoImage = styled.div`
    margin-top : 30px;

`

const Desc = styled.div`
    font-size : 20pt;
    margin-top : 30px;
    margin-bottom : 30px;
    font-family : "SimKyungha"
`