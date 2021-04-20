import React from 'react';
import styled from "styled-components";
import home from '../../static/images/background/home.jpg'

const MainDiv = styled.div`
  background-image: url(${home}); 
  background-repeat: no-repeat;
  background-size: cover;
`
const Inner = styled.div`
    padding: 6.9375rem;
`

const MasterLayout = ({children}) => {
    return (
        <MainDiv>
            <Inner>
                {children}
            </Inner>
        </MainDiv>
    );
};

export default MasterLayout;
