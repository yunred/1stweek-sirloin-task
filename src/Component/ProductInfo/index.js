import * as S from "./style";
import SelectImg from "Util/SelectImg";

const category = [
  "카테고리1",
  "카테고리2",
  "카테고리3",
  "카테고리4",
  "카테고리5",
  "카테고리6",
];

const selectedCategory = [
  "선택한 카테고리1",
  "선택한 카테고리2",
  "선택한 카테고리3",
  "선택한 카테고리4",
  "선택한 카테고리5",
];

const imgs = [
  "이미지1.jpg",
  "이미지2.jpg",
  "이미지3.jpg",
  "이미지4.jpg",
  "이미지5.jpg",
];

const ProductInfo = () => {
  return (
    <S.ProductInfoContainer>
      <h4>상품 기본 정보</h4>
      <S.ItemContainer>
        <S.Item>
          <S.Title>카테고리</S.Title>
          <S.InnerContainer width={`500px`}>
            <S.ListContainer width={`50%`}>
              {category.map((item) => {
                return (
                  <S.ListItem key={item}>
                    <S.Check type="checkbox" />
                    {item}
                  </S.ListItem>
                );
              })}
            </S.ListContainer>
            <S.ListContainer width={`30%`}>
              {selectedCategory.map((item) => {
                return (
                  <S.Tag key={item}>
                    {item}
                    <button>X</button>
                  </S.Tag>
                );
              })}
            </S.ListContainer>
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>필터 태그</S.Title>
          <S.InnerContainer>
            <S.InputContainer>
              <input type="text" placeholder="필터태그를 검색해 주세요." />
              <button>검색</button>
            </S.InputContainer>
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>상품명</S.Title>
          <S.InnerContainer>
            <S.InputContainer>
              <input type="text" />
            </S.InputContainer>
            <div>
              <span>상품 코드</span> <span>상품코드</span>
            </div>
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>상품 구성 소개 정보</S.Title>
          <S.InnerContainer>
            <S.InputContainer>
              <input type="text" />
            </S.InputContainer>
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>상품 썸네일</S.Title>
          <S.InnerContainer>
            <SelectImg />
            <div>이미지 파일명.jpg</div>
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>상품 대표 이미지</S.Title>
          <S.InnerContainer>
            <SelectImg />
            <S.ListContainer>
              {imgs.map((item) => {
                return <S.ListItem key={item}>{item}</S.ListItem>;
              })}
            </S.ListContainer>
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>상품 총 재고</S.Title>
          <S.InnerContainer>
            <span>NN개</span>
          </S.InnerContainer>
        </S.Item>
      </S.ItemContainer>
    </S.ProductInfoContainer>
  );
};

export default ProductInfo;
