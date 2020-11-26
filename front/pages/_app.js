import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import {
  TwitterOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { Tooltip } from "antd";
import wrapper from "../store/configureStore";

const HeaderTextFont = styled.div`
  color: black;
  font-weight: bold;
  font-size: 32px;
  padding: 10px;
`;
const Header = styled.header`
  width: 100%;
  background-color: yellow;

`;


const Atag = styled.a`
  color: black;
  padding: 20px;
  float: right;
`;

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Header>
        <HeaderTextFont>
          <TwitterOutlined
            style={{ color: "#00acee", fontSize: "48px", padding: "10px" }}
          />
          YellowBird
          <Tooltip title="깃허브로 이동합니다.">
            <Atag
              href="https://github.com/feel2174"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubOutlined />
            </Atag>
          </Tooltip>
          <Tooltip title="인스타그램으로 이동합니다.">
            <Atag
              href="https://www.instagram.com/lord_0814/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstagramOutlined />
            </Atag>
          </Tooltip>
        </HeaderTextFont>
      </Header>
     
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(NodeBird);
