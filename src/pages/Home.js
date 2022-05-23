import React from 'react'
//css를 자바스크립트에서 사용
import styled from 'styled-components'
import PangImage from '../assets/ggompang.jpeg'
import Button from 'react-bootstrap/Button'

const Home = () => {

    return (
    <Wrapper>
        <Header>DCU MBTI TEST</Header>
        <Contents>
            <Title>나의 MBTI는 !?</Title>
            <LogoImage>
                <img src={PangImage} className="rounded-circle" width={350} height={350}/>
            </LogoImage>
            <Desc>DCU와 함께하는 MBTI 검사!</Desc>
            <Button>테스트 시작하기</Button>
        </Contents>
    </Wrapper>
    )
}

export default Home;

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
`

const LogoImage = styled.div`
    margin-top : 30px;

`

const Desc = styled.div`
    font-size : 20pt;
    margin-top : 30px;
    margin-bottom : 30px;
`