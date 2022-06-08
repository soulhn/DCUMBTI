import React from 'react'
//css를 자바스크립트에서 사용
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ResultData } from '../assets/data/resultdata'

const Result = () => {
    const navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const mbti = SearchParams.get('mbti');
    //최종적으로 도출하는 결과 객체 ㅇㅇ
    const [resultData, setResultData] = React.useState({});

    React.useEffect(() =>{
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    }, [mbti])

    console.log(resultData);
 
    return (    
    <Wrapper>
        <Header>대구가톨릭대학교</Header>
        <Contents>
            <Title>결과 보기</Title>
            <LogoImage>
                <img alt="result img" src={resultData.image} className="rounded-circle" width={350} height={350}/>
            </LogoImage>
            <Desc>나의 MBTI는 !? {resultData.name}</Desc>
            <Button style={{fontFamily : "SimKyungha"}} onClick={() => navigate("/")} >
                
                테스트 다시하기</Button>
        </Contents>
    </Wrapper>
    )
}

export default Result;


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