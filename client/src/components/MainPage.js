import React from 'react';
import styled from 'styled-components';

import InputSide from './InputSide';
import OutputSide from './OutputSide';
const MainPageWrap = styled.div`
    display: flex;
    background-color: rgba(246, 246, 246, 0.5);
    justify-content: center;
`;

const MainPage = () => {
    return (
        <MainPageWrap>
            <InputSide></InputSide>
            <OutputSide></OutputSide>
        </MainPageWrap>
    );
}

export default MainPage;