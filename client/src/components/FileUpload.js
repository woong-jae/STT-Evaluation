import React from 'react';
import styled from 'styled-components';

const FileUploadWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 10%;
    width: auto;
    margin: 10px;
`;

const FileInput = styled.input`
    height: 30px;
    width: auto;
    margin: 15px;
`;

const FileUpload = (props) => {
    return (
        <FileUploadWrap>
            <FileInput type="file" accept=".mp3,audio/*" onChange={(e) => props.setFileName(e.target.files[0])}/>
        </FileUploadWrap>
    );
}

export default FileUpload;