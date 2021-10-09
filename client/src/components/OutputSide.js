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
    white-space: nowrap;
`;

const OutputSide = (props) => {
    const location = useLocation();
    console.log(location.state);
    return (
        <OutputSideWrap>
            <OutputCard>
                {props.displayText}
            </OutputCard>
        </OutputSideWrap>
    );
}

export default OutputSide;