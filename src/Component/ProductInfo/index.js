import * as S from "./style";

const ProductInfo = () => {
  return (
    <S.CategoryContainer>
      <h4>상품 기본 정보</h4>
      <S.ItemContainer>
        <S.Item>
          <S.Title>카테고리</S.Title>
          <S.InnerContainer>
            <S.ListContainer>
              <S.ListItem>카테고리명</S.ListItem>
              <S.ListItem>카테고리명</S.ListItem>
              <S.ListItem>카테고리명</S.ListItem>
              <S.ListItem>카테고리명</S.ListItem>
              <S.ListItem>카테고리명</S.ListItem>
              </S.ListContainer>
            <S.ListContainer>
              <S.ListItem>선택한 카테고리 명 X </S.ListItem>
              <S.ListItem>선택한 카테고리 명 X </S.ListItem>
              <S.ListItem>선택한 카테고리 명 X </S.ListItem>
              <S.ListItem>선택한 카테고리 명 X </S.ListItem>
              <S.ListItem>선택한 카테고리 명 X </S.ListItem>
              </S.ListContainer>
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>필터 태그</S.Title>
          <div>
            <div>
              <input /> <button>검색</button>{" "}
            </div>
          </div>
        </S.Item>
        <S.Item>
          <S.Title>상품명</S.Title>
          <S.InnerContainer>
            <input type="text" />{" "}
            <div>
              {" "}
              <span>상품 코드</span> <span>상품코드</span>{" "}
            </div>{" "}
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>상품 구성 소개 정보</S.Title>
          <div>
            <input type="text" />
          </div>
        </S.Item>
        <S.Item>
          <S.Title>상품 썸네일</S.Title>
          <S.InnerContainer>
            <div>+이미지 첨부</div> 
            <S.ListContainer>
            <S.ListItem>이미지 파일명.jpg</S.ListItem>
            <S.ListItem>이미지 파일명.jpg</S.ListItem>
            <S.ListItem>이미지 파일명.jpg</S.ListItem>
            <S.ListItem>이미지 파일명.jpg</S.ListItem>
            <S.ListItem>이미지 파일명.jpg</S.ListItem>
            </S.ListContainer>
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>상품 대표 이미지</S.Title>
          <div>+이미지 첨부</div>
          <div>이미지 파일명.jpg</div>
        </S.Item>
        <S.Item>
          <S.Title>상품 총 재고</S.Title>
          <span>NN개</span>
        </S.Item>
      </S.ItemContainer>
    </S.CategoryContainer>
  );
};

export default ProductInfo;
