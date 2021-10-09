import React from "react";
import styled from 'styled-components';
import { wordErrorRate } from '../utils/wer';

const Wrapper = styled.div`
    display: inline-block;
    width: 18rem;
    height: 655px;
    margin: 2rem 1.3rem;
`

const ResultContainer = styled.p`
    width: auto;
    height: 80%;
    margin: 10px;
    padding: 10px;
    white-space: normal;
`
const AnalysisContainer = styled.p`

`

const OutputCard = ({ output, original }) => {
    const WER = wordErrorRate(output.result, original);
    console.log(WER);
    return (
        <Wrapper>
            <ResultContainer>
               {output.result}
            </ResultContainer> 
            <AnalysisContainer>
                WER: {WER}
                <br/>
                Duration: {output.duration}
            </AnalysisContainer>
        </Wrapper>
    )
}

export default OutputCard;
