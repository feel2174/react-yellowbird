import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import UserProfile from "./Authentication/UserProfile";
import LoginForm from "./Authentication/LoginForm";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
  margin-top: 5px;
`;
const MainRow = styled(Row)`

  justify-content: center;
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link href="/">
            <a>무슨 일이 일어나고 있나요?</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
      </Menu>
      <MainRow gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col
          xs={24}
          md={12}
          xxl={12}
          style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
        >
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://zucca.tistory.com"
            target="_blank"
            rel="noreferrer noopener"
            style={{ position: "fixed", padding: "20px" }}
          >
            Made by devZucca
          </a>
        </Col>
      </MainRow>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
