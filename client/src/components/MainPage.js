import React, { useState } from 'react';
import styled from 'styled-components';

import Input from './Input';

const MainPageWrap = styled.div`
    display: flex;
    background-color: rgba(246, 246, 246, 0.5);
    justify-content: center;
`;

const MainPage = () => {
    const [displayText, setDisplayText] = useState('INITIALIZED: ready to test speech...');

    return (
        <MainPageWrap>
            <Input setDisplayText={setDisplayText}></Input>
        </MainPageWrap>
    );
}

export default MainPage;