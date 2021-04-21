import React from 'react'
import styled from "styled-components"

const Main = styled.div`
  width: calc(50% + 15.5rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 6.9375rem;
  margin-top: 22.625rem;
  @media only screen and (max-width: 601px) {
    width: 100%;
    padding: 0 .5rem;
  }
`

const Title = styled.div`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: FiraGO;
  font-size: 5.75rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  @media only screen and (max-width: 601px) {
    font-size: 2.75rem;
  }
`

const TitleRed = styled(Title)`
  color: var(--red);
  border-bottom: 1px solid var(--white);
  padding: 0 1rem 0.6875rem 0
`
const Details = styled.div`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: FiraGO;
  font-size: 1.5rem;
  font-weight: normal;
  max-width: 56.6875rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: var(--white);
  margin: 1.5rem 0 2.625rem;
  @media only screen and (max-width: 601px) {
    font-size: 1rem;
  }
`
const RegisterButton = styled.button`
  width: 12.8125rem;
  height: 3.125rem;
  margin-bottom: 7.5rem;
  border-radius: 1.5625rem;
  color: var(--white);
  background-color: var(--red);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.125rem
`

const Information = () => {
    return (
        <Main>
            <Title>რაღას უცდი?</Title>
            <TitleRed>შემოგვიერთდი გუნდში</TitleRed>
            <Details>
                მოგესალმებით!
                <br/>
                <br/>
                ჩვენი მიზანია შევქმნათ დახვეწილი და გაწვრთნილი აირსოფტ გუნდი,
                რომელშიც ნებისმიერ მსურველს შეეძლება გაწევრიანება, თუ ის
                აკმაყოფილებს გუნდის მოთხოვნებს.
                <br/>
                <br/>
                ჩვენ გთავაზობთ მეგობრულ გარემოს, საქმისადმი სერიოზულ
                დამოკიდებულებას, ყოველ კვირეულ ვარჯიშებსა და ინსტრუქტაჟს,
                თუ როგორ უნდა გამოიყენოთ პნევმატური იარაღი, ასევე სხვადასხვა
                საბრძოლო ტაქტიკასა და უამრავ მილიტარისტულ ინფორმაციას,
                რომელიც გამოგადგებათ სპორტში სწორად განვითარებისთვის.
                <br/>
                <br/>
                ასევე, დაგეხმარებით თქვენთვის სასურველი და მაქსიმალურად შესაბამისი
                აღჭურვილობის შერჩევაში და სურვილისამებრ მის "დატუნინგებაში".
                <br/>
                <br/>
                შეავსეთ მოცემული განაცხადი და შევხვდეთ ერთმანეთს პოლიგონზე!
                <br/>
                <br/>
                შეხვედრამდე!
            </Details>
            <RegisterButton>რეგისტრაცია</RegisterButton>
        </Main>
    )
}

export default Information
