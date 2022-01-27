import * as S from "./style";
import Container from "Component/Container";
import SelectImg from "Util/SelectImg";

/*

간략히=======================

props = {

  ProductInfoList = {
    category:[],
    filterTag:[],
    Product:{
      category:[],
      filterTag:[],
      description:"",
      thumbnail:"",
      imgs:"",
      stock:"",
    }
  }
  
}


자세히========================

props = {
  ProductInfoList = {
    category:[ // 전체 카테고리 목록
      {
        idx:1,
        content: "카테고리1" String
      },
      {
        idx:1,
        content: "카테고리2" String
      },
      ...
    ], 
    filterTag:[ // 전체 필터태그 목록
      {
        idx:1,
        content: "필터태그1" String
      },
      {
        idx:2,
        content: "필터태그2" String
      },
      ...
    ], 
    product:{ // 등록할 상품에 대한 정보
      category:[ // 선택한 카테고리,
        {
          idx:1,
          content:"카테고리1" String
        }
        ...
    ]
      filterTag:[ //// 선택한 필터태그
        {
          idx:1,
          content:"필터태그1" String
        }
        ...
      ]
      description:"" // string 상품 구성 소개 정보(설명)
      thumbnail: "" // string 상품 썸네일
      imgs: [ // 대표 이미지들
        {
          idx:1,
          content:"이미지1" String
        }
        ...
      ]
      stock: "" // int 상품 재고
    }
  }
}
*/

export const PIHeader = (props) => {
  return <h4>상품 기본 정보</h4>;
};

export const PIContent = (props) => {
  return (
    <S.ItemContainer>
      {item.map((item) => {
        return <S.Item key={item.idx}>{item.content}</S.Item>;
      })}
    </S.ItemContainer>
  );
};

const ProductInfo = () => {
  return (
    <S.ProductInfoContainer>
      <Container
        ContainerHeader={<PIHeader />}
        ContainerContent={<PIContent />}
      />
    </S.ProductInfoContainer>
  );
};

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

const item = [
  {
    idx: "1",
    content: (
      <>
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
      </>
    ),
  },
  {
    idx: "2",
    content: (
      <>
        <S.Title>필터 태그</S.Title>
        <S.InnerContainer>
          <S.InputContainer>
            <input type="text" placeholder="필터태그를 검색해 주세요." />
            <button>검색</button>
          </S.InputContainer>
        </S.InnerContainer>
      </>
    ),
  },
  {
    idx: "3",
    content: (
      <>
        <S.Title>상품명</S.Title>
        <S.InnerContainer>
          <S.InputContainer>
            <input type="text" placeholder="상품명을 입력해주세요." />
          </S.InputContainer>
          <S.ProductContainer>
            <span>상품 코드</span> <span>상품코드</span>
          </S.ProductContainer>
        </S.InnerContainer>
      </>
    ),
  },
  {
    idx: "4",
    content: (
      <>
        {" "}
        <S.Title>상품 구성 소개 정보</S.Title>
        <S.InnerContainer>
          <S.InputContainer>
            <input
              type="text"
              placeholder="상품 구성 소개 정보를 입력해 주세요."
            />
          </S.InputContainer>
        </S.InnerContainer>
      </>
    ),
  },
  {
    idx: "5",
    content: (
      <>
        <S.Title>상품 썸네일</S.Title>
        <S.InnerContainer>
          <SelectImg className="productInfo-img-btn" />
          <div>이미지 파일명.jpg</div>
        </S.InnerContainer>
      </>
    ),
  },
  {
    idx: "6",
    content: (
      <>
        <S.Title>
          상품 대표 <br />
          이미지
        </S.Title>
        <S.InnerContainer>
          <SelectImg className="productInfo-img-btn" />
          <S.ListContainer>
            {imgs.map((item) => {
              return <S.ListItem key={item}>{item}</S.ListItem>;
            })}
          </S.ListContainer>
        </S.InnerContainer>
      </>
    ),
  },
  {
    idx: "7",
    content: (
      <>
        <S.Title>상품 총 재고</S.Title>
        <S.InnerContainer>
          <span>NN개</span>
        </S.InnerContainer>
      </>
    ),
  },
];

export default ProductInfo;
