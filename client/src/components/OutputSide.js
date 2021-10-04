import React from 'react';
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
    return (
        <OutputSideWrap>
            <OutputCard>
                {props.displayText}
            </OutputCard>
        </OutputSideWrap>
    );
}

export default OutputSide;