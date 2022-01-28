import React, { useState } from "react";
import * as Style from "./style";
import DateTime from "Util/DateTime";

export const ProodctBox = (props) => {
  const [state, setState] = useState("");
  const [event, setEvent] = useState("");

  const toDay = new Date();
  const selectDay = state[0];
  console.log(selectDay);

  const handleChange = (event) => {
    if (toDay.getDate() <= selectDay)
      return setEvent({ title: event.target.value });
  };

  return (
    <Style.ProductListContainer>
      <Style.TitleBox>{props.name}</Style.TitleBox>
      <Style.ContentsBox>
        <Style.Box>
          <Style.Input
            type="radio"
            name="host_chk_first"
            value="auto"
            checked
          />
          <span>제한없음</span>
        </Style.Box>
        <Style.Box>
          <Style.Input type="radio" name="host_chk_first" value="select" />
          <span>미판매</span>
        </Style.Box>
        <Style.Box>
          <Style.Input
            type="radio"
            name="host_chk_first"
            value="third"
            handleChange={handleChange}
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
      <ProodctBox name={<h4>상품 노출 기한</h4>} />
    </>
  );
};

export default PScontentBox;
