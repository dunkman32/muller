import React from 'react';
import styled from "styled-components";
import home from '../../static/images/background/home.jpg'
import Header from "../Header";

const MainDiv = styled.div`
  background-image: url(${home}); 
  background-repeat: no-repeat;
  background-size: cover;
`
const Inner = styled.div`
    @media only screen and (max-width: 601px) {
     padding: .5rem;
   }
`

const MasterLayout = ({children}) => {
    return (
        <MainDiv>
            <Header/>
            <Inner>
                {children}
            </Inner>
        </MainDiv>
    );
};

export default MasterLayout;
