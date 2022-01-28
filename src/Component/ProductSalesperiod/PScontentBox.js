import React, { useState } from "react";
import * as Style from "./style";
import DateTime from "Util/DateTime";
// import Date from "Util/DateTime/Date";

export const ProodctBox = (props) => {
  const [state, setState] = useState("");
  console.log(state);
  return (
    <Style.ProductListContainer>
      <Style.TitleBox>{props.name}</Style.TitleBox>
      <Style.ContentsBox>
        <Style.Box>
          <Style.Input type="radio" name="radiobutton" />
          <span>제한없음</span>
        </Style.Box>
        <Style.Box>
          <Style.Input type="radio" name="radiobutton" />
          <span>미판매</span>
        </Style.Box>
        <Style.Box>
          <Style.Input type="radio" name="radiobutton" />
          <span>노출 기간 설정</span>
        </Style.Box>
        <Style.Box>
          <DateTime state={state} setState={setState} />
          {/* <Date /> */}
        </Style.Box>
      </Style.ContentsBox>
    </Style.ProductListContainer>
  );
};

const PScontentBox = (props) => {
  return (
    <>
      <ProodctBox name="상품 노출 기한" />
      <ProodctBox name="상품 판매 기한" />
    </>
  );
};

export default PScontentBox;
