import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 15px solid transparent;
  border-color: black black black #ffffff;
  animation: spinner .6s cubic-bezier(0.4, 0, 1, 1) infinite;
  @keyframes spinner {
  from {transform: rotate(0deg); }
  to {transform: rotate(360deg);}
}
`;

const LoadingText = styled.h2`
  margin-top: 30px;
  color: black;
  height: fit-content;
  text-align: center;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Spinner />
      <LoadingText>Speech to Text....</LoadingText>
    </Wrapper>
  );
};

export default Loading;
