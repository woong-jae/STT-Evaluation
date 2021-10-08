import React, { useState } from 'react';
import styled from 'styled-components';

import ApiList from './ApiList';
import FileUpload from './FileUpload';
import OrgText from './OrgText';
import logo from '../image/beanz_logo.png';
import * as API from "../api";
import { wordErrorRate } from '../utils/wer';

const InputSideWrap = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    max-width: 250px;
    background-color: rgba(246, 246, 246, 0.5);
`;

const LogoImage = styled.img`
    display: fixed;
    height: 100px;
    margin-top: 25px;
    align-self: center;
`;

const RunBtn = styled.button`
    height: 50px;
    width: auto;
    margin: 10px;
`;

const InputSide = (props) => {
    const [apiName, setApiName] = useState("");
    const [fileName, setFileName] = useState("");
    
    const handleRun = async () => {
        const data = new FormData();
        data.append('file', fileName);
        if (apiName === "Kakao") {
            const ret = await API.kakaoSTT(data);
            console.log("WER: " + wordErrorRate(ret.data.value, "헤이 카카오"));
            console.log("Duration: " + ret.data.duration);
        }
        if (apiName === "IBM") {
            API.ibmWatsonSTT(data);
        }
        if (apiName === "Naver") {
            API.clovaSTT(data);
        }
        if (apiName === "Google") {
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
        if (apiName === "Azure") {
            const ret = await API.azureSTT(data);
            props.setDisplayText(ret.data);
        }
    }

    return (
        <InputSideWrap>
            <LogoImage src={logo} alt="logo image"/>
            <ApiList setApiName={setApiName}></ApiList>
            <FileUpload setFileName={setFileName}></FileUpload>
            <OrgText></OrgText>
            <RunBtn onClick={handleRun}>Run Button^^</RunBtn>
        </InputSideWrap>
    );
}

export default InputSide;