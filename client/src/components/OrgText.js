import React from "react";
import styled from "styled-components";

const OrgTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  margin: 10px;
`;

const OrgTextInput = styled.textarea`
  width: auto;
  margin: 10px;
  padding: 10px;
  resize: none;
`;

const OrgText = ({ setOrgText }) => {
  const handleChange = (e) => {
    setOrgText(e.target.value);
  };

  return (
    <OrgTextWrap>
      <OrgTextInput
        type="text"
        placeholder="음성파일의 원본 텍스트를 입력하세요"
        onChange={handleChange}
      />
    </OrgTextWrap>
  );
};

export default OrgText;
