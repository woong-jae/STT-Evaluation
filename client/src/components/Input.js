import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import ApiList from "./ApiList";
import FileUpload from "./FileUpload";
import OrgText from "./OrgText";
import logo from "../image/beanz_logo.png";
import * as API from "../api";
import { wordErrorRate } from '../utils/wer';

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

const Input = (props) => {
  const [apiName, setApiName] = useState({
    Google: false,
    Kakao: false,
    Ibm: false,
    Naver: false,
    Azure: false,
  });
  const [fileName, setFileName] = useState("");
  const [orgText, setOrgText] = useState("");
  const history = useHistory();

  const handleRun = async () => {
    const apiResult = {
      Google: "",
      Kakao: "",
      Ibm: "",
      Naver: "",
      Azure: "",
    }
    const data = new FormData();
    data.append('file', fileName);
    if (apiName.Kakao) {
        const ret = await API.kakaoSTT(data);
        console.log("WER: " + wordErrorRate(ret.data.value, "헤이 카카오"));
        console.log("Duration: " + ret.data.duration);
    }
    if (apiName.Ibm) {
        API.ibmWatsonSTT(data);
    }
    if (apiName.Naver) {
        API.clovaSTT(data);
    }
    if (apiName.Google) {
        const data = new FormData();
        const reader = new FileReader();
        if (fileName) {
            reader.readAsDataURL(fileName);
            reader.onload = () => {
                const fileBase64 = reader.result.slice(22);
                data.append('file', fileBase64);
                API.googleSTT(data)
            }
            reader.onerror = () => {
                console.log("Base64 encoding failed");
            };
        }
    }
    if (apiName.Azure) {
        const ret = await API.azureSTT(data);
        //props.setDisplayText(ret.data);
        apiResult.Azure = ret.data;
    }
    history.push({
      pathname: '/result',
      state: { apiResult: apiResult },
    });
}

  return (
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
  );
};

export default Input;
