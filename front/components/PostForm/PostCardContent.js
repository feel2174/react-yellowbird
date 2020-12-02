import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const PostCardContent = ({ postData }) => (
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v) => {
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
    })}
  </div>
);

PostCardContent.propTypes = { postData: PropTypes.string.isRequired };

export default PostCardContent;
