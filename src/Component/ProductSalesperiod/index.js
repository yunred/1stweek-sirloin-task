import Container from "Component/Container";
import * as Style from "./";

export const PSheader = (props) => {
  const optionSetter = props.optionSetter;

  return (
    <>
      <S.ContainerName>상품 옵션</S.ContainerName>
      <S.OptionSetAppederButton>+ 옵션 세트 추가</S.OptionSetAppederButton>
    </>
  );
};

const ProductSalesperiod = () => {
  return (
    <Container
      ContainerHeader={<PSheader />}
      ContainerContent={<MDOContent />}
    />
  );
};

export default ProductSalesperiod;
