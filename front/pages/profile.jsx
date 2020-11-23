import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { END } from 'redux-saga';
import Axios from "axios";
import Head from "next/head";
import Router from "next/router";
import useSWR from 'swr';
import AppLayout from "./components/AppLayout";
import NicknameEditForm from "./components/NicknameEditForm";
import FollowList from "./components/FollowList";
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_MY_INFO_REQUEST,
} from "../reducers/user";
import wrapper from "../store/configureStore";

const fetcher = (url) => Axios.get(url, { withCredentials: true }).then((result) => result.data);

const Profile = (props) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const { data: followersData, error: followerError } = useSWR('http://localhost:3065/user/followers', fetcher);
  const { data: followingsData, error: followingError } = useSWR('http://localhost:3065/user/followings', fetcher);

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.replace("/");
    }
  }, [me && me.id]);

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return <div>팔로잉/팔로워 로딩중 에러가 발생했습니다.</div>
    }

  if (!me) {
    return '내 정보 로딩중...';
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={followingsData} />
        <FollowList header="팔로워" data={followersData} />
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  Axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    Axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Profile;
