import Container from "Component/Container";
import * as Style from "./";

export const PSheader = (props) => {
  return (
    <>
      <Style.ProductContainer>노출 및 판매기간 설정</Style.ProductContainer>
    </>
  );
};

const ProductSalesperiod = () => {
  return <Container ContainerHeader={<PSheader />} />;
};

export default ProductSalesperiod;
