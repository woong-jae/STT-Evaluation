import React, { useState } from 'react';
import styled from 'styled-components';

const ApiListWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 30%;
    width: auto;
    margin: 10px;
    overflow: auto;
`;

const ApiSelectBtn = styled.button`
    height: 40%;
    width: 40%;
    margin: 10px;
`;

const ApiList = () => {
    const [apiName, setApiName] = useState("");

    return (
        <ApiListWrap>
            <ApiSelectBtn value="Kakao" onClick={() => setApiName("Kakao")}>Kakao</ApiSelectBtn>
            <ApiSelectBtn value="Naver" onClick={() => setApiName("Naver")}>Naver</ApiSelectBtn>
            <ApiSelectBtn value="Google" onClick={() => setApiName("Google")}>Google</ApiSelectBtn>
            <ApiSelectBtn value="Azure" onClick={() => setApiName("Azure")}>Azure</ApiSelectBtn>
            
        </ApiListWrap>
    );
}

export default ApiList;