import React from "react";
import { Menu } from "antd";

const MenuButton = () => (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.github.com/"
      >
        게시글 수정
      </a>
    </Menu.Item>

    <Menu.Item danger>삭제</Menu.Item>
  </Menu>
);

export default MenuButton;
