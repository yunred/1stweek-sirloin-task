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
  const menu = [
    {id: '1',
      title: '기본설정'
    },
    {id: '2',
    title: '회원'
    },
    {id: '3',
    title: '진열'
    },
    {id: '4',
    title: '상품'
    },
    {id: '5',
    title: '주문'
    },
    {id: '6',
    title: '배송'
    },
    {id: '7',
    title: '기본설정'
    },
  ]

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
