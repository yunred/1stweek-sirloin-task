import * as S from './style';
import Container from 'Component/Container';
import DateTime from 'Util/DateTime';
import Date from 'Util/DateTime/Date';
import React, { useContext, useState } from 'react';
import { PDcontext } from 'store/PDdata';
import * as ST from 'Util/Toggle/style.js';

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
  const deliveryContext = useContext(PDcontext).PDelivery;
  const deliveryState = deliveryContext.state;
  const setDeliveryState = deliveryContext.setState;
  const [state, setState] = useState('');

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
              <DateTime state={state} setState={setState} />
            </div>
            <div className="flex bottom_margin">
              <div className="flex margin-right-more">
                <S.PreOrderSpan className="margin-right">
                  새벽배송
                </S.PreOrderSpan>
                <Date state={state} setState={setState} />
              </div>
              <div className="flex">
                <S.PreOrderSpan className="margin-right">
                  일반배송
                </S.PreOrderSpan>
                <Date state={state} setState={setState} />
              </div>
            </div>
          </S.ContentBox>
        </S.Content>
      </div>
    </>
  );
};

export default ProductDelivery;
