import React from 'react'
//css를 자바스크립트에서 사용
import styled from 'styled-components'
import PangImage from '../assets/maindcu.png'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    //테스트 시작하기 버튼 함수
    const handleClickButton = () =>{
        navigate('/question');

    }

    return (
    <Wrapper>
        <Header>대구가톨릭대학교 MBTI TEST</Header>
        <Contents>
            <Title>나의 MBTI는 !?</Title>
            <LogoImage>
                <img src={PangImage} className="rounded-circle" width={350} height={350}/>
            </LogoImage>
            <Desc>DCU와 함께하는 MBTI 검사!</Desc>
            <Button style={{fontFamily : "SimKyungha"}} onClick={handleClickButton}>
                
                테스트 시작하기</Button>
        </Contents>
    </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
    background-color : #99b3ff;
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