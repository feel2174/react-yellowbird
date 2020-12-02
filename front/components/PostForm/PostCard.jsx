import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Popover, Button, Avatar, List, Comment, Dropdown } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  EllipsisOutlined,
  DownOutlined,
} from "@ant-design/icons";
import moment from "moment";
import Link from "next/link";
import PostImages from "./PostImages";
import CommentForm from "../CommentForm";
import PostCardContent from "./PostCardContent";
import {
  REMOVE_POST_REQUEST,
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
  RETWEET_REQUEST,
} from "../../reducers/post";
import FollowButton from "../FollowButton";
import MenuButton from "../MenuButton";

moment.locale("ko");

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state) => state.user.me && state.user.me.id);
  const liked = post.Likers.find((v) => v.id === id);

  const onLike = useCallback(() => {
    dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, []);
  const onUnLike = useCallback(() => {
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  });

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const onRetweet = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    });
  }, [id]);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" onClick={onRetweet} />,
          liked ? (
            <HeartTwoTone
              key="heart"
              twoToneColor="#eb2f96"
              onClick={onUnLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    {!post.RetweetId && <Button>수정</Button>}
                    <Button
                      type="danger"
                      loading={removePostLoading}
                      onClick={onRemovePost}
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        title={
          post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null
        }
        extra={id && <FollowButton post={post} />}
      >
        {post.RetweetId && post.Retweet ? (
          <Card
            cover={
              post.Retweet.Images[0] && (
                <PostImages images={post.Retweet.Images} />
              )
            }
          >
            <div style={{ float: "right" }}>
              {moment(post.createdAt).format("YYYY.MM.DD")}
            </div>

            <Card.Meta
              avatar={<Avatar>{post.Retweet.User.nickname[0]}</Avatar>}
              title={post.Retweet.User.nickname}
              description={<PostCardContent postData={post.Retweet.content} />}
            />
          </Card>
        ) : (
          <>
            <Dropdown overlay={<MenuButton />}>
              <a style={{ float: "right", paddingLeft: '10px' }}>
                <DownOutlined />
              </a>
            </Dropdown>
            <div style={{ float: "right" }}>
              {moment(post.createdAt).format("YYYY.MM.DD")}
            </div>

            <Card.Meta
              avatar={
                <Link href={`/user/${post.User.id}`}>
                  <a>
                    <Avatar>{post.User.nickname[0]}</Avatar>
                  </a>
                </Link>
              }
              title={post.User.nickname}
              description={<PostCardContent postData={post.content} />}
            />
          </>
        )}
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;

// import React, { useState, useCallback, useEffect } from "react";
// import { Card, Button, Avatar, List, Comment, Popover } from "antd";
// import PropTypes from "prop-types";
// import {
//   RetweetOutlined,
//   HeartTwoTone,
//   HeartOutlined,
//   MessageOutlined,
//   EllipsisOutlined,
// } from "@ant-design/icons";
// import { useSelector, useDispatch } from "react-redux";
// import styled from "styled-components";
// import Link from "next/link";

// import CommentForm from "../CommentForm";
// import PostCardContent from "./PostCardContent";
// import PostImages from "./PostImages";
// import FollowButton from "../FollowButton";
// import { REMOVE_POST_REQUEST, RETWEET_REQUEST } from "../../../reducers/post";

// const CardWrapper = styled.div`
//   margin-bottom: 20px;
// `;

// const PostCard = ({ post }) => {
//   const dispatch = useDispatch();
//   const { removePostLoading } = useSelector(
//     (state) => state.post
//   );
//   const [commentFormOpened, setCommentFormOpened] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const { me } = useSelector((state) => state.user);
//   const id = me && me.id;

//   const onToggleComment = useCallback(() => {
//     setCommentFormOpened((prev) => !prev);
//   }, []);

//   const onToggleLike = useCallback(() => {
//     setLiked((prev) => !prev);
//   }, [id]);

//   const onRemovePost = useCallback(() => {
//     return dispatch({
//       type: REMOVE_POST_REQUEST,
//       data: post.id,
//     });
//   }, []);

//   const onRetweet = useCallback(() => {
//     if (!id) {
//       return alert("로그인이 필요합니다.");
//     }
//     return dispatch({
//       type: RETWEET_REQUEST,
//       data: post.id,
//     });
//   }, [id]);

//   return (
//     <CardWrapper key={post.id}>
//       <Card
//         cover={post.Images[0] && <PostImages images={post.Images} />}
//         actions={[
//           <RetweetOutlined key="retweet" onClick={onRetweet} />,
//           liked ? (
//             <HeartTwoTone
//               twoToneColor="#eb2f96"
//               key="heart"
//               onClick={onToggleLike}
//             />
//           ) : (
//             <HeartOutlined key="heart" onClick={onToggleLike} />
//           ),
//           <MessageOutlined key="message" onClick={onToggleComment} />,
//           <Popover
//             key="ellipsis"
//             content={
//               <Button.Group>
//                 {id && post.UserId === id ? (
//                   <>
//                     <Button>수정</Button>
//                     <Button
//                       type="danger"
//                       loading={removePostLoading}
//                       onClick={onRemovePost}
//                     >
//                       삭제
//                     </Button>
//                   </>
//                 ) : (
//                   <Button>신고</Button>
//                 )}
//               </Button.Group>
//             }
//           >
//             <EllipsisOutlined />
//           </Popover>,
//         ]}
//         title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
//         extra={<FollowButton post={post} />}
//       >
//         {post.RetweetId && post.Retweet ? (
//           <Card
//             cover={
//               post.Retweet.Images[0] && (
//                 <PostImages images={post.Retweet.Images} />
//               )
//             }
//           >
//             <Card.Meta
//               avatar={<Avatar>{post.Retweet.User.nickname[0]}</Avatar>}
//               title={post.Retweet.User.nickname}
//               description={<PostCardContent postData={post.Retweet.content} />}
//             />
//           </Card>
//         ) : (
//           <Card.Meta
//             avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
//             title={post.User.nickname}
//             description={<PostCardContent postData={post.content} />}
//           />
//         )}
//       </Card>
//       {commentFormOpened && (
//         <>
//           <CommentForm post={post} />
//           <List
//             header={`${post.Comments ? post.Comments.length : 0} 댓글`}
//             itemLayout="horizontal"
//             dataSource={post.Comments || []}
//             renderItem={(item) => (
//               <li>
//                 <Comment
//                   author={item.User.nickname}
//                   avatar={
//                     <Link
//                       href={{ pathname: "/user", query: { id: item.User.id } }}
//                       as={`/user/${item.User.id}`}
//                     >
//                       <a>
//                         <Avatar>{item.User.nickname[0]}</Avatar>
//                       </a>
//                     </Link>
//                   }
//                   content={item.content}
//                 />
//               </li>
//             )}
//           />
//         </>
//       )}
//     </CardWrapper>
//   );
// };

// PostCard.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.number,
//     User: PropTypes.object,
//     UserId: PropTypes.number,
//     content: PropTypes.string,
//     createdAt: PropTypes.object,
//     Comments: PropTypes.arrayOf(PropTypes.any),
//     Images: PropTypes.arrayOf(PropTypes.any),
//     RetweetId: PropTypes.number,
//     Retweet: PropTypes.objectOf(PropTypes.any),
//   }).isRequired,
// };

// export default PostCard;
