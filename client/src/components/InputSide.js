import React from 'react';
import styled from 'styled-components';

import logo from '../image/beanz_logo.png';

const InputSideWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

const LogoImage = styled.img`
    display: fixed;
    height: 100px;
    margin-top: 25px;
`;

const InputSide = () => {
    return (
        <InputSideWrap>
            <LogoImage src={logo} alt="logo image"/>
        </InputSideWrap>
    );
}

export default InputSide;