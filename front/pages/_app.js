import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { TwitterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const TwitterHeadIcon = styled(TwitterOutlined)`
  color: #00acee;
  font-size: 48px;
  padding: 10px;
`;
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
        <TwitterHeadIcon />
        NodeBird
      </HeaderTextFont>
    </Header>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(withReduxSaga(NodeBird));
