import * as S from './style';
import Container from 'Component/Container';

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

export const PDeliveryHeader = props => {
  return <h4>상품 배송 설정</h4>;
};

export const PDeliveryContent = props => {
  return <></>;
};

export default ProductDelivery;
