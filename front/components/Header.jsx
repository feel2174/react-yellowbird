import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const HeaderArea = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
`;

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 80px;
  transition: 0.4s ease;
  &.hide {
    transform: translateY(-80px);
  }
`;

const Header = () => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  return (
    <HeaderArea>
      <HeaderWrap className={hide && "hide"}>Header Contents ...</HeaderWrap>
    </HeaderArea>
  );
};

export default Header;
