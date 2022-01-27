import React from "react";
import styled from "styled-components";

const NavContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 15%;
  position: fixed;
  height: 100%;
  overflow: auto;
  border-right: 1px solid lightgray;
`;

const NavMenu = styled.li`
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid lightgray;
`;

const Nav = () => {
  const menu = [
    { title: "설로인" },
    { title: "기본설정" },
    { title: "회원" },
    { title: "진열" },
    { title: "상품" },
    { title: "주문" },
    { title: "배송" },
    { title: "프로모션" },
    { title: "혜택" },
    { title: "혜택" },
    { title: "고객 센터 관리" },
    { title: "알림" },
  ];

  return (
    <NavContainer>
      {menu.map((index, title) => (
        <NavMenu key={index}>{index.title}</NavMenu>
      ))}
    </NavContainer>
  );
};

export default Nav;
