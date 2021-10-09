import React from 'react';
import styled from 'styled-components';

import OutputCard from './OutputCard';
import logo from "../image/beanz_logo.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: none;
  max-width: 250px;
  background-color: rgb(250 250 250);
  box-shadow: none;
`;

const OutputSideWrap = styled.div`
    margin-left: 5%;
    width: 900px;
    height: 60%;
    padding: 0 1rem;
    align-self: center;
    overflow-x: auto;
    white-space: pre-wrap;
`;

const LogoImage = styled.img`
  height: 100px;
  margin-top: 30px;
`;

const BackBtn = styled.button`
  height: 50px;
  width: 100px;
  margin-bottom: 20px;
  font-size: 1.5em;
  text-align: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
`;

const OutputSide = ({ setIndex, orgText, apiResult }) => {
    const resultArr = Object.entries(apiResult).filter((val)=>val[1]!=="");
    
    return (
        <Wrapper>
            <LogoImage src={logo} alt="logo image" />
            <OutputSideWrap>
                {resultArr.map((result, index) => (
                    <OutputCard key={index} apiName={result[0]} output={result[1]} original={orgText}/>
                ))}
            </OutputSideWrap>
            <BackBtn onClick={() => setIndex(1)}>◀ Back</BackBtn>
        </Wrapper>
    );
}

export default OutputSide;