import React from "react";
import styled from "styled-components";

import kakaoImg from "../image/kakao.jpeg";
import naverImg from "../image/naver.jpeg";
import googleImg from "../image/google.png";
import azureImg from "../image/azure.png";
import ibmImg from "../image/ibm.jpeg";

const ApiListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  overflow: auto;
`;

const ApiSelectBtn = styled.div`
  height: 150px;
  width: 150px;
  margin: 10px;
  border: 2px solid #ededed;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  ${({ active }) => active && `border: 2px solid #2d6bac`};
`;

const ApiList = ({ apiName, setApiName }) => {
  return (
    <ApiListWrap>
      <ApiSelectBtn
        name="Google"
        active={apiName.Google}
        onClick={() => setApiName({ ...apiName, Google: !apiName.Google })}
        style={{ background: `no-repeat center/140% url(${googleImg})` }}
      />
      <ApiSelectBtn
        name="Kakao"
        active={apiName.Kakao}
        onClick={() => setApiName({ ...apiName, Kakao: !apiName.Kakao })}
        style={{ background: `no-repeat center/130% url(${kakaoImg})` }}
      />
      <ApiSelectBtn
        name="Naver"
        active={apiName.Naver}
        onClick={() => setApiName({ ...apiName, Naver: !apiName.Naver })}
        style={{ background: `no-repeat center/170% url(${naverImg})` }}
      />
      <ApiSelectBtn
        name="Azure"
        active={apiName.Azure}
        onClick={() => setApiName({ ...apiName, Azure: !apiName.Azure })}
        style={{ background: `no-repeat center/130% url(${azureImg})` }}
      />
      <ApiSelectBtn
        name="Ibm"
        active={apiName.Ibm}
        onClick={() => setApiName({ ...apiName, Ibm: !apiName.Ibm })}
        style={{ background: `no-repeat center/90% url(${ibmImg})` }}
      />
    </ApiListWrap>
  );
};

export default ApiList;
