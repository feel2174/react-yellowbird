import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Button } from "antd";
import { useSelector } from "react-redux";

const TextArea = Input;
const PostCardContent = ({
  postData,
  editMode,
  onCancelModifyPost,
  onChangePost,
}) => {
  const { modifyPostLoading, modifyPostDone } = useSelector(
    (state) => state.post);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    if (modifyPostDone) {
      onCancelModifyPost();
    }
  }, [modifyPostDone]);

  const onChangeText = useCallback((e) => {
    setEditText(e.target.value);
  });

  return (
    <div>
      {editMode ? (
        <>
          <TextArea placeholder={postData} value={editText} onChange={onChangeText} />
          <Button.Group>
            <Button
              type="primary"
              loading={modifyPostLoading}
              onClick={onChangePost(editText)}
            >
              수정
            </Button>
            <Button type="danger" onClick={onCancelModifyPost}>
              취소
            </Button>
          </Button.Group>
        </>
      ) : (
        postData.split(/(#[^\s#]+)/g).map((v) => {
          if (v.match(/(#[^\s#]+)/)) {
            return (
              <Link
                prefetch={false}
                href={{ pathname: "/hashtag", query: { tag: v.slice(1) } }}
                as={`/hashtag/${v.slice(1)}`}
                key={v}
              >
                <a>{v}</a>
              </Link>
            );
          }
          return v;
        })
      )}
    </div>
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  onCancelModifyPost: PropTypes.func.isRequired,
  onChangePost: PropTypes.func.isRequired,
};

PostCardContent.defaultProps = {
  editMode: false,
};

export default PostCardContent;
