import React, { useState } from 'react';
import styled from 'styled-components';

const ApiListWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 30%;
    width: auto;
    margin: 10px;
    overflow: auto;
`;

const ApiContent = styled.div`
    display: flex;
    height: 25%;
    width: auto;
    margin: 10px;
`;

const NameInput = styled.input`
    height: auto;
    width: 50px;
    margin: 10px;
`;

const UrlInput = styled.input`
    height: auto;
    width: 100px;
    margin: 10px;
`;

const ApiPlusBtn = styled.button`
    height: 15%;
    width: auto;
    margin: 10px;
`;

const ApiList = () => {
    const [apiUrl, setApiUrl] = useState([""]);

    const handlePlus = () => {
        const temp = [...apiUrl];
        temp.push("");
        setApiUrl(temp);
    }

    return (
        <ApiListWrap>
            {apiUrl.map(url => (
                <ApiContent>
                    <NameInput type="text" placeholder="Name"/>
                    <UrlInput type="text"placeholder="Url"/>
                </ApiContent>
            ))}
            
            <ApiPlusBtn onClick={handlePlus}>plus button^^</ApiPlusBtn>
        </ApiListWrap>
    );
}

export default ApiList;