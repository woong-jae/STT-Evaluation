import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import OutputCard from './OutputCard';

const OutputSideWrap = styled.div`
    margin-left: 5%;
    width: 70%;
    height: 90%;
    padding: 0 1rem;
    align-self: center;
    overflow-x: auto;
    white-space: pre-wrap;
`;

const OutputSide = () => {
    const location = useLocation();
    const resultArr = Object.entries(location.state.apiResult).filter((val)=>val[1]!=="");

    return (
        <OutputSideWrap>
            {resultArr.map((result, index) => (
                <OutputCard key={index}>
                    {result[0]}
                    {result[1]}
                </OutputCard>
            ))}
        </OutputSideWrap>
    );
}

export default OutputSide;