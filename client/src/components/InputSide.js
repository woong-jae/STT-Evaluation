import React, { useState } from 'react';
import styled from 'styled-components';

import ApiList from './ApiList';
import FileUpload from './FileUpload';
import OrgText from './OrgText';
import logo from '../image/beanz_logo.png';
import * as AzureSTT from '../api/azure/AzureSTT';
import * as API from "../api";

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
        if (apiName === "Kakao") {
            const data = new FormData();
            data.append('file', fileName);
            API.kakaoSTT(data);
        }
        if (apiName === "Naver") {

        }
        if (apiName === "Google") {
            API.googleSTT(fileName)
        }
        if (apiName === "Azure") {
            AzureSTT.fileChange(fileName, props.setDisplayText)
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