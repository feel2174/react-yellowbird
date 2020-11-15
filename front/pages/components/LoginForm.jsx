import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../../reducers/user";

// useCallback 함수 캐싱
// useMemo 값을 캐싱

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const ButtonStyle = styled(Button)`
  

`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({id, password}))
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
      </div>
      <div>
        <Input name="user-id" value={id} onChange={onChangeId} required></Input>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
      </div>
      <div>
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        ></Input>
      </div>
      <ButtonWrapper>
        <ButtonStyle type="primary" htmlType="submit" loading={false}>
          로그인
        </ButtonStyle>
        <Link href="/signup">
          <a>
            <ButtonStyle type="primary" style={{ float: 'right' }}>회원가입</ButtonStyle>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
