import React from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';

const FormWrapper = styled(Form)`
  
  border: 1px soild #d9d9d9;
  margin: 20px 20px 20px 20px;
`;

const NicknameEditForm = (props) => {
  return (
    <FormWrapper>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </FormWrapper>
  );
};
export default NicknameEditForm;
