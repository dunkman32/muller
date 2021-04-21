import React from 'react';
import styled from "styled-components";
import home from '../../static/images/background/home.jpg'
import Svg from '../../static/images/background/1.svg'
import Header from "../Header";

const MainDiv = styled.div`
  background-image: url(${home}); 
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`
const Inner = styled.div`
    @media only screen and (max-width: 601px) {
     padding: .5rem;
   }
`

const IMG = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
`

const MasterLayout = ({children}) => {
    return (
      <>
          <MainDiv>
              <Header/>
              <Inner>
                  {children}
              </Inner>
          </MainDiv>
          {/*<IMG src={Svg} />*/}
      </>
    );
};

export default MasterLayout;
