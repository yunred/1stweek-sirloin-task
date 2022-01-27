import * as S from "./style";
import SelectImg from 'Util/SelectImg';

const ProductInfo = () => {
  return (
    <S.CategoryContainer>
      <h4>상품 기본 정보</h4>
      <S.ItemContainer>
        <S.Item>
          <S.Title>카테고리</S.Title>
          <S.InnerContainer width={`500px`}>
            <S.ListContainer width={`50%`}>
              <S.ListItem>
                <S.Check type="checkbox" />
                카테고리명
              </S.ListItem>
              <S.ListItem>
                <S.Check type="checkbox" />
                카테고리명
              </S.ListItem>
              <S.ListItem>
                <S.Check type="checkbox" />
                카테고리명
              </S.ListItem>
              <S.ListItem>
                <S.Check type="checkbox" />
                카테고리명
              </S.ListItem>
              <S.ListItem>
                <S.Check type="checkbox" />
                카테고리명
              </S.ListItem>
              <S.ListItem>
                <S.Check type="checkbox" />
                카테고리명
              </S.ListItem>
              <S.ListItem>
                <S.Check type="checkbox" />
                카테고리명
              </S.ListItem>
            </S.ListContainer>
            <S.ListContainer width={`30%`}>
              <S.Tag>선택한 카테고리 명 X </S.Tag>
              <S.Tag>선택한 카테고리 명 X </S.Tag>
              <S.Tag>선택한 카테고리 명 X </S.Tag>
              <S.Tag>선택한 카테고리 명 X </S.Tag>
              <S.Tag>선택한 카테고리 명 X </S.Tag>
            </S.ListContainer>
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>필터 태그</S.Title>
          <S.InnerContainer>
            <S.InputContainer>
              <input type="text" placeholder="필터태그를 검색해 주세요." />{" "}
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
            <SelectImg/>
            <div>이미지 파일명.jpg</div>
            
          </S.InnerContainer>
        </S.Item>
        <S.Item>
          <S.Title>상품 대표 이미지</S.Title>
          <S.InnerContainer>
            <SelectImg/>
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
          <S.Title>상품 총 재고</S.Title>
          <S.InnerContainer>
            <span>NN개</span>
          </S.InnerContainer>
        </S.Item>
      </S.ItemContainer>
    </S.CategoryContainer>
  );
};

export default ProductInfo;
