import React, { useState } from 'react';
import styled from 'styled-components';

import InputSide from './InputSide';
import OutputSide from './OutputSide';
const MainPageWrap = styled.div`
    display: flex;
    background-color: rgba(246, 246, 246, 0.5);
    justify-content: center;
`;

const MainPage = () => {
    const [displayText, setDisplayText] = useState('INITIALIZED: ready to test speech...');

    return (
        <MainPageWrap>
            <InputSide setDisplayText={setDisplayText}></InputSide>
            <OutputSide displayText={displayText}></OutputSide>
        </MainPageWrap>
    );
}

export default MainPage;