import * as Style from "./style";

export const ProodctBox = (props) => {
  return (
    <Style.ProductListContainer>
      <Style.TitleBox>{props.name}</Style.TitleBox>
      <Style.ContentsBox>
        <Style.Input type="radio" />
        제한없음
        <Style.Input type="radio" />
        미판매
        <Style.Input type="radio" />
        노출 기간 설정
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
