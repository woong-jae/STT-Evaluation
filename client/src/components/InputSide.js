import React from 'react';
import styled from 'styled-components';

import ApiList from './ApiList';
import FileUpload from './FileUpload';
import OrgText from './OrgText';
import logo from '../image/beanz_logo.png';

const InputSideWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`;

const LogoImage = styled.img`
    display: fixed;
    height: 100px;
    margin-top: 25px;
    align-self: center;
`;

const RunBtn = styled.button`
    display: fixed;
    height: 50px;
    width: auto;
    margin: 10px;
`;

const InputSide = () => {
    return (
        <InputSideWrap>
            <LogoImage src={logo} alt="logo image"/>
            <ApiList></ApiList>
            <FileUpload></FileUpload>
            <OrgText></OrgText>
            <RunBtn></RunBtn>
        </InputSideWrap>
    );
}

export default InputSide;