import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import {
  TwitterOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import withReduxSaga from "next-redux-saga";
import { Tooltip } from "antd";
import wrapper from "../store/configureStore";

const HeaderTextFont = styled.div`
  color: black;
  font-weight: bold;
  font-size: 32px;
  padding: 10px;
`;
const Header = styled.header`
  background-color: yellow;
`;

const NodeBird = ({ Component }) => (
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
        NodeBird
        <Tooltip title="깃허브로 이동합니다." >
          <a
            href="https://github.com/feel2174"
            target="_blank"
            rel="noreferrer noopener"
            style={{ color: "black", padding: "20px", float: "right" }}
          >
            <GithubOutlined />
          </a>
        </Tooltip>
        <Tooltip title="인스타그램으로 이동합니다.">
          <a
            href="https://www.instagram.com/lord_0814/"
            target="_blank"
            rel="noreferrer noopener"
            style={{ color: "black", padding: "20px", float: "right" }}
          >
            <InstagramOutlined />
          </a>
        </Tooltip>
      </HeaderTextFont>
    </Header>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(withReduxSaga(NodeBird));
