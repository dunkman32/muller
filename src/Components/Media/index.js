import React from 'react'
import styled from "styled-components"
import defaultPic from '../../static/images/defaults/1.png'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`
const OneLine = styled.div`
    display: flex
`

const Title = styled.div`
    font-family: Montserrat;
    font-size: 2.25rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
`

const TitleRed = styled(Title)`
    color: #f21f24;
    margin-left: 10px
`

const Secondary = styled.div`
    opacity: 0.23;
    font-family: Montserrat;
    font-size: 1.4375rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 300px
`

const CardsContainer = styled.div`
    display: flex;
    column-gap: 2rem

`
const Card = styled.div`
    width: 250px;
    height: 350px;
    padding: 2.5rem;
    border-radius: 1.25rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between
`

const ReadMoreButton = styled.button`
    width: 11.5625rem;
    height: 3.125rem;
    padding: 0.8125rem 3rem;
    opacity: 0.1;
    border-radius: 1.5625rem;
    background-color: #8d8d8d;
    outline: none;   
`

const Media = () => {
    return (
        <Main>
            <OneLine> 
                <Title>PANTHOM </Title>
                <TitleRed>FURY</TitleRed>
            </OneLine>
            <Secondary>Georgian airsoft team</Secondary>
            <CardsContainer>
                <Card>
                    <img src={defaultPic} alt="default" width="250" height="150" />
                    <span>Video</span>
                    <ReadMoreButton>Read More</ReadMoreButton>
                </Card>
                <Card>
                    <img src={defaultPic} alt="default" width="250" height="150" />
                    <span>Video</span>
                    <ReadMoreButton>Read More</ReadMoreButton>
                </Card>
                <Card>
                    <img src={defaultPic} alt="default" width="250" height="150" />
                    <span>Video</span>
                    <ReadMoreButton>Read More</ReadMoreButton>
                </Card>
                <Card>
                    <img src={defaultPic} alt="default" width="250" height="150" />
                    <span>Video</span>
                    <ReadMoreButton>Read More</ReadMoreButton>
                </Card>
            </CardsContainer>
        </Main>
    )
}

export default Media
