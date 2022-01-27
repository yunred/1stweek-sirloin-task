import Container from "Component/Container";
import PScontentBox from "./PScontentBox";
import * as Style from "./style";

export const PSheader = () => {
  return (
    <>
      <Style.ProductContainer>노출 및 판매기간 설정</Style.ProductContainer>
    </>
  );
};

const ProductSalesperiod = (props) => {
  return (
    <Container
      ContainerHeader={<PSheader />}
      ContainerContent={<PScontentBox />}
    />
  );
};

export default ProductSalesperiod;
