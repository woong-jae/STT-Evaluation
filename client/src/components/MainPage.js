import React, { useState } from 'react';
import styled from 'styled-components';

import Input from './Input';
import OutputSide from './OutputSide';

const MainPageWrap = styled.div`
    display: flex;
    background-color: rgba(246, 246, 246, 0.5);
    justify-content: center;
`;

const MainPage = () => {
    const [index, setIndex] = useState(1);
    const [orgText, setOrgText] = useState("");
    const [apiResult, setApiResult] = useState({});

    return (
        <MainPageWrap>
            {index ? 
                <Input setIndex={setIndex} setOrgText={setOrgText} setApiResult={setApiResult}></Input>
                :<OutputSide setIndex={setIndex} orgText={orgText} apiResult={apiResult}></OutputSide>
            }
        </MainPageWrap>
    );
}

export default MainPage;