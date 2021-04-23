import styled from "styled-components";
import {Link} from "react-router-dom";

const Main = styled.div`
  width: calc(100% - 13.875rem);
  padding: 10.8125rem 6.9375rem 0 6.9375rem;
  @media only screen and (max-width: 601px) {
    width: calc(100% - 1rem);
    padding: .5rem;
  }
  position: relative;
  height: 5.9375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
  grid-template-areas:  "logo logo text text text";
  @media only screen and (max-width: 601px) {
    display: flex;
  }
`
const Logo = styled.img`
  width: 4.9375rem;
  height: 5.9375rem;
  @media only screen and (max-width: 601px) {
    width: auto;
    height: 2.5rem;
  }
`

const TxtDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.375rem 0;
  @media only screen and (max-width: 601px) {
    display: none;
  }
`

const FirstTxt = styled.span`
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: var(--white);
`
const SecondTxt = styled(FirstTxt)`
  color: var(--red);
`

const ThirdTxt = styled.span`
  font-family: Montserrat;
  font-size: 0.625rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: var(--white);
`

const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 601px) {
    justify-content: flex-end;
  }
`
const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 601px) {
    display: none;
  }
`
const RightMobile = styled.div`
  @media only screen and (max-width: 600px) {
    display: block;
  }
`

const CustomLink = styled(Link)`
  font-family: FiraGO;
  font-size: 1rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: var(--red);
  padding: 0 1.5625rem;
  text-decoration: none;
`
const Search = styled.div`
  .flexbox {
    background: linear-gradient(155deg, #55c7ed, #2bb3e0, #3bc1ed);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search {
    margin: -5px;
    cursor: pointer;
  }

  .search > h3 {
    font-weight: normal;
  }

  .search > h1,
  .search > h3 {
    color: white;
    margin-bottom: 15px;
    text-shadow: 0 1px var(--red);
  }

  .search > div {
    display: inline-block;
    position: relative;
    filter: drop-shadow(0 1px var(--red));
  }

  .search > div:after {
    content: "";
    background: white;
    width: 2px;
    height: 10px;
    position: absolute;
    top: 20px;
    right: 2px;
    transform: rotate(135deg);
  }

  .search > div > input {
    color: white;
    font-size: 16px;
    background: transparent;
    width: 0;
    height: 0;
    padding: 10px;
    border: solid 2px white;
    outline: none;
    border-radius: 35px;
    transition: width 0.5s;
  }

  .search > div > input::placeholder {
    color: #efefef;
    opacity: 0;
    transition: opacity 150ms ease-out;
  }

  .search > div > input:focus::placeholder {
    opacity: 1;
  }

  .search > div > input:focus,
  .search > div > input:not(:placeholder-shown) {
    width: 200px;
  }
`

export {
    Main,
    LogoDiv,
    Logo,
    TxtDiv,
    FirstTxt,
    SecondTxt,
    ThirdTxt,
    Left,
    Right,
    RightMobile,
    CustomLink,
    Search,
}
