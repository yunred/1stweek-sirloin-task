import React from "react";
import styled from "styled-components";

const NavContainer = styled.ul`
  list-style-type: none;
  width: 25%;
  position: fixed;
  height: 100%;
  overflow: auto;
`;

const NavMenu = styled.li``;




const Nav = () => {
  return (
    <>
      <NavContainer>
        <NavMenu props={기본설정}/>
        <NavMenu props={회원}/>
        <NavMenu props={진열}/>
        <NavMenu props={상품}/>
        <NavMenu props={주문}/>
        <NavMenu props={배송}/>
        <NavMenu props={프로모션}/>
        <NavMenu props={혜택}/>
        <NavMenu props={고객 센터 관리}/>
        <NavMenu props={알림}/>
      </NavContainer>
    </>
  );
};

export default Nav;
