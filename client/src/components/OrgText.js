import React from 'react';
import styled from 'styled-components';

const OrgTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 30%;
    width: auto;
    margin: 10px;
`;

const OrgTextInput = styled.input`
    width: auto;
    margin: 10px;
`;

const OrgText = () => {
    return (
        <OrgTextWrap>
            <OrgTextInput type="text" placeholder="Original Text"/>
        </OrgTextWrap>
    );
}

export default OrgText;