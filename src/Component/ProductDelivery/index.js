import * as S from './style';
import Container from 'Component/Container';
import DateTime from 'Util/DateTime';
import Date from 'Util/DateTime/Date';
import React, { useContext, useEffect, useState } from 'react';
import { PDcontext } from 'store/PDdata';
import * as ST from 'Util/Toggle/style.js';
import 'react-datepicker/dist/react-datepicker.css';

const ProductDelivery = () => {
  return (
    <S.ProductDeliveryContainer>
      <Container
        ContainerHeader={<PDeliveryHeader />}
        ContainerContent={<PDeliveryContent />}
      />
    </S.ProductDeliveryContainer>
  );
};

export const PDeliveryHeader = () => {
  return <S.HeaderContainer>상품 배송 설정</S.HeaderContainer>;
};
export const PDeliveryContent = () => {
  const deliveryContext = useContext(PDcontext).PDInfo;
  const deliveryState = deliveryContext.state;
  const setDeliveryState = deliveryContext.setState;

  const [periodState, setPeriodState] = useState('');
  const [earlyMorningState, setEarlyMorningState] = useState('');
  const [normalState, setNormalState] = useState('');

  useEffect(() => {
    const newState = { ...deliveryState };
    newState.earlyMorningDate = earlyMorningState;
    setDeliveryState(newState);
    console.log(deliveryState);
    if (deliveryState.earlyMorningState < deliveryState.orderPeriod[1]) {
      if (window.confirm('주문 시간 이후로 출고일을 지정해주세요') === true) {
        const newState = { ...deliveryState };
        newState.earlyMorningDate = '';
        setDeliveryState(newState);
      } else {
        const newState = { ...deliveryState };
        newState.earlyMorningDate = '';
        setDeliveryState(newState);
      }
    }
  }, [earlyMorningState]);

  useEffect(() => {
    const newState = { ...deliveryState };
    newState.normalDate = normalState;
    setDeliveryState(newState);
    console.log(deliveryState);
    if (deliveryState.normalState < deliveryState.orderPeriod[1]) {
      if (window.confirm('주문 시간 이후로 출고일을 지정해주세요') === true) {
        const newState = { ...deliveryState };
        newState.normalDate = '';
        setDeliveryState(newState);
      } else {
        const newState = { ...deliveryState };
        newState.normalDate = '';
        setDeliveryState(newState);
      }
    }
  }, [normalState]);

  useEffect(() => {
    const newState = { ...deliveryState };
    newState.orderPeriod = periodState;
    setDeliveryState(newState);
    console.log(deliveryState);
  }, [periodState[1]]);

  useEffect(() => {
    if (
      deliveryState.isDesignated === true ||
      deliveryState.isPickup === true
    ) {
      const editState = { ...deliveryState };
      editState.ispreOrder = false;
      setDeliveryState(editState);
    }
  }, [deliveryState.isDesignated, deliveryState.isPickup]);

  useEffect(() => {
    if (deliveryState.ispreOrder === true) {
      console.log('gd');
      const editState = { ...deliveryState };
      editState.isDesignated = false;
      editState.isPickup = false;
      setDeliveryState(editState);
    }
  }, [deliveryState.ispreOrder]);

  return (
    <>
      <div className="container">
        <S.Content>
          <S.titleBox>
            <S.titleSpan>사용자 배송일 출발일 지정</S.titleSpan>
          </S.titleBox>
          <S.ContentBox>
            <ST.CheckBoxWrapper>
              <ST.CheckBox
                checked={deliveryState.isDesignated}
                id="checkbox"
                type="checkbox"
              />
              <ST.CheckBoxLabel
                htmlFor="checkbox"
                onClick={() => {
                  const newState = { ...deliveryState };
                  newState.isDesignated = !newState.isDesignated;
                  setDeliveryState(newState);
                }}
              />
            </ST.CheckBoxWrapper>
          </S.ContentBox>
        </S.Content>
        <S.Content className="bottom_border">
          <S.titleBox>
            <S.titleSpan>방문 수령</S.titleSpan>
          </S.titleBox>
          <S.ContentBox>
            <ST.CheckBoxWrapper>
              <ST.CheckBox
                checked={deliveryState.isPickup}
                id="checkbox"
                type="checkbox"
              />
              <ST.CheckBoxLabel
                htmlFor="checkbox"
                onClick={() => {
                  const newState = { ...deliveryState };
                  newState.isPickup = !newState.isPickup;
                  setDeliveryState(newState);
                }}
              />
            </ST.CheckBoxWrapper>
          </S.ContentBox>
        </S.Content>
        <S.Content>
          <S.titleBox>
            <S.titleSpan>선 주문 예약 배송</S.titleSpan>
          </S.titleBox>
          <S.ContentBox className="preorder_content_box">
            <ST.CheckBoxWrapper className="bottom_margin">
              <ST.CheckBox
                checked={deliveryState.ispreOrder}
                id="checkbox"
                type="checkbox"
              />
              <ST.CheckBoxLabel
                htmlFor="checkbox"
                onClick={() => {
                  const newState = { ...deliveryState };
                  newState.ispreOrder = !newState.ispreOrder;
                  setDeliveryState(newState);
                }}
              />
            </ST.CheckBoxWrapper>
            <div className="flex bottom_margin">
              <S.PreOrderSpan>주문시간</S.PreOrderSpan>
              <DateTime state={periodState} setState={setPeriodState} />
            </div>
            <div className="flex bottom_margin">
              <div className="flex margin-right-more">
                <S.PreOrderSpan className="margin-right">
                  새벽배송
                </S.PreOrderSpan>
                <Date
                  state={earlyMorningState}
                  setState={setEarlyMorningState}
                />
              </div>
              <div className="flex">
                <S.PreOrderSpan className="margin-right">
                  일반배송
                </S.PreOrderSpan>
                <Date state={normalState} setState={setNormalState} />
              </div>
            </div>
          </S.ContentBox>
        </S.Content>
      </div>
    </>
  );
};

export default ProductDelivery;
