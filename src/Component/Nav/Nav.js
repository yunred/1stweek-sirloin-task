import React from "react";
import styled from "styled-components";

const NavContainer = styled.ul`
  list-style-type: none;
  width: 25%;
  height: 100%;
`;

const NavMenu = styled.li``;

const Nav = () => {
  const menu = [
    { id: "1", title: "기본설정" },
    { id: "2", title: "회원" },
    { id: "3", title: "진열" },
    { id: "4", title: "상품" },
    { id: "5", title: "주문" },
    { id: "6", title: "배송" },
    { id: "7", title: "프로모션" },
    { id: "8", title: "혜택" },
    { id: "9", title: "혜택" },
    { id: "10", title: "고객 센터 관리" },
    { id: "11", title: "알림" },
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
