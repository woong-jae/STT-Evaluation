import React, { useState } from "react";
import styled from "styled-components";

import ApiList from "./ApiList";
import FileUpload from "./FileUpload";
import OrgText from "./OrgText";
import Loading from "./Loading";
import logo from "../image/beanz_logo.png";
import * as API from "../api";

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

const LogoImage = styled.img`
  height: 100px;
  margin-top: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 900px;
  height: 60%;
  border: none;
  background-color: rgb(250 250 250);
`;

const InputInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const RunBtn = styled.button`
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

const Input = ({ setIndex, setOrgText, setApiResult }) => {
  const [apiName, setApiName] = useState({
    Google: false,
    Kakao: false,
    Ibm: false,
    Naver: false,
    Azure: false,
  });
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    const result = {};
    const data = new FormData();
    data.append('file', fileName);
    if (apiName.Kakao) {
        const ret = await API.kakaoSTT(data);
        //result.Kakao = ret.data;
    }
    if (apiName.Ibm) {
        const ret = await API.ibmWatsonSTT(data);
        //result.Ibm = ret.data;
    }
    if (apiName.Naver) {
        const ret = await API.clovaSTT(data);
        result.Naver = ret.data;
    }
    if (apiName.Google) {
        const ret = await API.googleSTT(data);
        result.Google = ret.data; 
    }
    if (apiName.Azure) {
        const ret = await API.azureSTT(data);
        result.Azure = ret.data;
    }
    // 파일 입력과 api 선택이 없으면 history push 안되게
    if (fileName!=="" && (apiName.Kakao || apiName.Ibm || apiName.Naver || apiName.Google || apiName.Azure)) {
      //setLoading(true);
      setIndex(0);
      setApiResult(result);
      setLoading(false);
    }
}

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <LogoImage src={logo} alt="logo image" />
          <InputWrapper>
            <ApiList apiName={apiName} setApiName={setApiName} />
            <InputInfoWrapper>
              <FileUpload setFileName={setFileName} />
              <OrgText setOrgText={setOrgText} />
            </InputInfoWrapper>
          </InputWrapper>
          <RunBtn onClick={handleRun}>Run ▶️</RunBtn>
        </Wrapper>
      )}
    </>
  );
};

export default Input;
