import React, { useContext } from "react";
import * as Style from "./style";
import DateTime from "Util/DateTime";
import { PDcontext } from "store/PDdata.js";

export const ProodctBoxSecond = (props) => {
  const context = useContext(PDcontext).PScontentBoxSecond;
  const state = context.state;
  const setState = context.setState;
  console.log(state);

  return (
    <Style.ProductListContainer>
      <Style.TitleBox>{props.name}</Style.TitleBox>
      <Style.ContentsBox>
        <Style.Box>
          <Style.Input
            type="radio"
            name="host_chk"
            value="auto"
            checked
            onChange={(newValue) => {
              setState(newValue);
            }}
          />
          <span>제한없음</span>
        </Style.Box>
        <Style.Box>
          <Style.Input
            type="radio"
            name="host_chk"
            value="select"
            onChange={(newValue) => {
              setState(newValue);
            }}
          />
          <span>미판매</span>
        </Style.Box>
        <Style.Box>
          <Style.Input
            type="radio"
            name="host_chk"
            value="third"
            onChange={(newValue) => {
              setState(newValue);
            }}
          />
          <span>노출 기간 설정</span>
        </Style.Box>
        <Style.Box>
          <DateTime state={state} setState={setState} />
        </Style.Box>
      </Style.ContentsBox>
    </Style.ProductListContainer>
  );
};

const PScontentBox = (props) => {
  return (
    <>
      <ProodctBoxSecond name={<h4>상품 판매 기한</h4>} />
    </>
  );
};

export default PScontentBox;
