import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col, Switch, Divider } from "antd";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
 const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const [theme, setTheme] = React.useState('light');
  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div>
      <Menu mode="horizontal" theme={theme} >
        <Menu.Item key='1'>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key='4'>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      <Switch onChange={changeTheme} /> 
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://zucca.tistory.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by devZucca
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
