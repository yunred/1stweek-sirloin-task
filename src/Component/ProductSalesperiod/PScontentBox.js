import React, { useContext, useEffect, useState } from "react";
import * as Style from "./style";
import RadioButton from "Util/RadioButton";
import DateTimePickers from "Util/DateTimePicker";
import { PDcontext } from "store/PDdata.js";

export const ProodctBox = (props) => {
  const [value, setValue] = useState([true, false, false]);
  const context = useContext(PDcontext).PScontentBox;
  const state = context.state;
  const setState = context.setState;

  useEffect(() => {
    const newState = { ...state };
    if (value[0]) {
      newState.showPeriod = "제한 없음";
    } else if (value[1]) {
      newState.showPeriod = "미판매";
    } else {
    }
    setState(newState);
  }, [value]);
};

export const PDeliveryContent = (props) => {
  const [value, setValue] = useState([true, false, false]);
  const deliveryContext = useContext(PDcontext).PspInfoState;
  const deliveryState = deliveryContext.state;
  const setDeliveryState = deliveryContext.setState;

  const [startPeriodState, setStartPeriodState] = useState(
    deliveryState.orderPeriodStart
  );
  const [endPeriodState, setEndPeriodState] = useState(
    deliveryState.orderPeriodEnd
  );

  const [earlyMorningState, setEarlyMorningState] = useState(
    deliveryState.earlyMorningDate
  );
  const [normalState, setNormalState] = useState(deliveryState.nomalDate);

  useEffect(() => {
    if (Number(deliveryState.orderPeriodEnd).gettime() >= Number(new Date()))
      return;
    const newState = { ...deliveryState };
    newState.earlyMorningDate = earlyMorningState;
    setDeliveryState(newState);
  }, [earlyMorningState]);

  useEffect(() => {
    if (Number(deliveryState.orderPeriodEnd).gettime() < Number(new Date())) {
      return;
    }
    const newState = { ...deliveryState };
    newState.normalDate = normalState;
    setDeliveryState(newState);
  }, [normalState]);

  return (
    <Style.Container>
      <Style.TitleBox>
        <h4>{props.name}</h4>
      </Style.TitleBox>
      <Style.SelectRadio id="group1">
        <RadioButton value={value} setValue={setValue} />
      </Style.SelectRadio>

      <Style.RadioContentBox>
        <Style.CheckBoxWrapper className="bottom_margin">
          <Style.CheckBox
            checked={deliveryState.ispreOrder}
            id="checkbox"
            type="checkbox"
          />
          <Style.CheckBoxLabel
            htmlFor="checkbox"
            onClick={() => {
              const newState = { ...deliveryState };
              newState.ispreOrder = !newState.ispreOrder;
              setDeliveryState(newState);
            }}
          />
        </Style.CheckBoxWrapper>
        <div>
          <DateTimePickers
            state={startPeriodState}
            setState={setStartPeriodState}
            acitve={deliveryState.ispreOrder}
          />
          <DateTimePickers
            state={endPeriodState}
            setState={setEndPeriodState}
            acitve={deliveryState.ispreOrder}
          />
        </div>
      </Style.RadioContentBox>
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
