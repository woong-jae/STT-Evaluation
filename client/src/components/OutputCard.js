import React from "react";
import styled from "styled-components";
import { wordErrorRate } from "../utils/wer";

const Wrapper = styled.div`
  flex: 0 0 auto;
  width: 17.5rem;
  height: 80%;
  margin: 10px;
`;

const ResultContainer = styled.p`
  width: auto;
  height: 77%;
  margin: 10px;
  padding: 10px;
  white-space: normal;
  overflow-y: auto;
`;
const AnalysisContainer = styled.div`
  height: fit-content;
  padding: 10px;
  width: auto;
`;

const NameContainer = styled.p`
  margin-top: 10px;
  padding-bottom: 10px;
  height: 20px;
  text-align: center;
  font-weight: 700;
  border-bottom: 1px solid lightgray;
`;

const OutputCard = ({ apiName, output, original }) => {
  const WER = original && wordErrorRate(output.result, original);

  return (
    <Wrapper>
      <NameContainer>{apiName}</NameContainer>
      <ResultContainer>{output.result}</ResultContainer>
      {original && (
        <AnalysisContainer>
          <strong>WER:</strong> {WER.toFixed(2)}
          <br />
          <strong>Duration:</strong> {output.duration}
        </AnalysisContainer>
      )}
    </Wrapper>
  );
};

export default OutputCard;
