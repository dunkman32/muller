import React from 'react';
import styled from "styled-components";
import logo from '../../static/images/logo/logo.png'
import {Link} from "react-router-dom";

const Main = styled.div`
  width: calc(100% - 13.875rem);
  padding: 1rem 6.9375rem;
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

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media only screen and (min-width: 601px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({open}) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({open, setOpen}) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    )
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 600px) {
    width: 100%;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({open}) => {
    return (
        <StyledMenu open={open}>
            {
                HEADERS.map((h) => <CustomLink to={{pathname: h.to}}> {h.label} </CustomLink>)
            }
        </StyledMenu>
    )
}

const Index = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
        <Main>
            <RightMobile ref={node}>
                <Menu open={open} setOpen={setOpen} />
                <Burger open={open} setOpen={setOpen}/>
            </RightMobile>
            <Left>
                <LogoDiv>
                    <Logo alt='logo' src={logo} className={'logo'}/>
                    <TxtDiv className={'text'}>
                        <FirstTxt>
                            PHANTOM
                        </FirstTxt>
                        <SecondTxt>
                            FURY
                        </SecondTxt>
                        <ThirdTxt>
                            Georgian airsoft team
                        </ThirdTxt>
                    </TxtDiv>
                </LogoDiv>
            </Left>
            <Right>
                {
                    HEADERS.map((h) => <CustomLink to={{pathname: h.to}}> {h.label} </CustomLink>)
                }
                <Search className="flexbox">
                    <div className="search">
                        <div>
                            <input type="text" placeholder="Search . . ." required/>
                        </div>
                    </div>
                </Search>
            </Right>
        </Main>
    );
};

const HEADERS = [
    {
        label: 'Home',
        to: '#'
    },
    {
        label: 'Team',
        to: '#'
    },
    {
        label: 'Calendar',
        to: '#'
    },
    {
        label: 'Contact',
        to: '#'
    },
]

export default Index;
