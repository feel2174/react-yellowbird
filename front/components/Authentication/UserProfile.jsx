import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { logoutRequestAction } from "../../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <Card
      style={{ marginTop: "20px", marginLeft: "20px", padding: "5px" }}
      actions={[
        <div key="twit">
          <Link href="/">
            <a>Tweet</a>
          </Link>
          <br />
          {me.Posts.length}
        </div>,
        <div key="follwings">
          <Link href="/profile">
            <a>Following</a>
          </Link>
          <br />
          {me.Followings.length}
        </div>,
        <div key="followers">
          <Link href="/profile">
            <a>Follower</a>
          </Link>
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogOut} shape="round" loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
