import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    width: 18rem;
    height: 655px;
    margin: 2rem 1.3rem;
`

const TextBox = styled.p`
    width: auto;
    height: 80%;
    margin: 10px;
    padding: 10px;
    white-space: normal;
`

const OutputCard = ({ children }) => {
    return (
        <Wrapper>
           <TextBox>
               {children}
           </TextBox> 
        </Wrapper>
    )
}

export default OutputCard;
