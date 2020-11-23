import React from "react";
import { useRouter } from "next/router";

import { END } from "redux-saga";
import Axios from "axios";

import { useSelector } from "react-redux";
import Head from "next/head";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import wrapper from "../../store/configureStore";
import { LOAD_POST_REQUEST } from "../../reducers/post";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostForm/PostCard";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);
  return (
    <AppLayout>
      <Head />
      <PostCard post={singlePost} />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    Axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      Axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POST_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Post;
