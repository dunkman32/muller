import React from 'react'
import styled from "styled-components"

const Divider = styled.div`
  height: 1rem;
  border: solid 1px var(--grey);
  background-color: var(--red);
  margin-bottom: 10.3125rem;
  @media only screen and (max-width: 601px) {
    margin-bottom: 4.3125rem;
  }
`

export const Hr = () => <Divider/>
export default Hr
