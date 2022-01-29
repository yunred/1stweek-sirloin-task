import React, { useContext } from "react";
import * as Style from "./style";
import RadioButton from "Util/RadioButton";
import { PDcontext } from "store/PDdata.js";

export const ProodctBox = (props) => {
  const context = useContext(PDcontext).PScontentBox;
  const state = context.state;
  // const setState = context.setState;
  // const acitve = context.state;
  // const minDateTime = context.state;
  // const maxDateTime = context.state;
  // const callback = context.state;
  console.log(state);

  return (
    <Style.Container>
      <Style.TitleBox>
        <h4>{props.name}</h4>
      </Style.TitleBox>
      <Style.SelectRadio id="group2">
        <RadioButton />
      </Style.SelectRadio>
    </Style.Container>
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
