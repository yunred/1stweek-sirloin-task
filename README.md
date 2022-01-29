# 1주차 과제 설로인 기업과제 상품 등록 페이지

## [GO DEMO🚀]()

url =

## MEMBER

| 팀장   | 팀원   | 팀원   | 팀원   |
| ------ | ------ | ------ | ------ |
| 신원규 | 김서윤 | 지연비 | 권영채 |

## 이슈 정리

### 다계층 구조

우리팀은 각 Component에서 `Container`를 하위 컴포넌트로 하고 그 안에서 `Header`와 `Content` 를 하위 컴포넌트로 하는 구조를 선택하였습니다.

```js
// 모든 컴포넌트는 Container안의 Header + Content 구조로 구성되어 있습니다.

- Component/
--- index.js
--- style.js
----- Container/ // Component에서 Header와 Content를 props로 전달합니다.
--- index.js
--- style.js
------- Header/  //Component-Header
------- Content/ //Component-Content

- src/
--- App/
----- ProductSalesperiod/
----- ProductInfo/
----- PDOption/
----- ProductImage/
----- ProductInfoNotice/
----- ProductDelivery/
----- PDMileage/
----- ETC/
```

각 컴포넌트들의 일관적 구조를 찾을 수 있었고, 재사용성의 극대화를 위한 선택이였습니다. 하지만 각 Component의 state들을 공유해야 했고, 각각의 props들이 전달되면서 props의 추적이 어려워지는 props Drilling 문제에 직면하게 되었습니다. 전역 state 관리를 위한 방법이 필요하다고 느꼈습니다.

### How to Control Global State

본 프로젝트에서는 각 컴포넌트 마다 공유하는 state가 있습니다. 때문에 효율적인 전역 State 관리가 필요했고, 우리팀은 React에서 제공하는 `ContextAPI`를 사용하기로 결정했습니다.

```jsx
// store / PDdata.js

export const PDcontext = createContext();

const [componentState,setComponentState] = useState();

const PDdata = {
  ComponentData: {
    state: componentState,
    setState: setComponentState,
  }
  ...
}
```

전역 state에서 각 컴포넌트에 전달하고 사용할 데이터는 다음과 같습니다.

```js
// PDoption

PDoption = {
  [...optionSetList, {
    optionImg: [],
    optionList: [
      {
        optionName: '',
        optionValue: [undefined, undefined, undefined, false],
        additionnal: []
      },
      ]
    }
  ]
}

//ProductInfo

ProductInfo = {
    categoryList:[],
    filterTagList:[],
    Product:{
      idx:""
      category:[],
      filterTag:[],
      name:"",
      description:"",
      thumbnail:"",
      imgs:[],
      stock:"",
  }
}

...

```

<!-- <details>
<summary>
<h2 style="display:inline"> 기능 구현 요구사항 </h2> 
</summary> -->

## 기능 구현 요구사항

### 노출 및 판매기간 설정

✔️ 달력 및 시간 지정 컴포넌트 제공(MUI)

#### 노출 기한

✔️ 노출 기한 설정(제한 없음 default)

#### 판매 기한

✔️ 판매 기한 설정(제한 없음 default)

### 상품 기본 정보

#### 카테고리

✔️ 체크박스 선택을 통해 해당 상품에 카테고리 지정

✔️ 체크박스 지정 해제 또는 선택된 카테고리 X버튼을 통해 카테고리 지정을 해제할 수 있음

✔️ 상품은 최소 1개 이상의 카테고리가 지정되어 있어야 함

#### 필터태그

✔️ 검색 결과 시 검색어 텍스트 일치가 높은 순으로 리스팅

✔️ 필터태그 포커스시, 필터태그에 등록되어 있는 모든 필터태그가 제공됨

✔️ 검색 결과가 없는 경우 '검색 결과 없음' 안내

✔️ 검색한 필터태그 TAP시, 해당 필터태그 지정됨

#### 상품코드 & 상품명

✔️ 고유한 상품코드 부여

✔️ 상품명 입력

#### 상품 구성 소개 정보

✔️ 커머스 리스트에서 상품의 구성을 설명하는 텍스트 입력

#### 상품 썸네일

✔️ 첨부 버튼 TAP 후, 우측에 파일명 X버튼과 함께 노출

✔️ 추가 첨부 시, 기존 이미지 삭제 후 새로 업로드

#### 상품 대표 이미지

✔️ 첨부 버튼 TAP 후, 우측에 파일명 X버튼과 함께 노출

✔️ 추가 첨부 시, 최신 업로드 순으로 추가

#### 상품 총 재고

✔️ 해당 상품에 등록되어있는 옵션 재고의 총합 표시

### 상품 옵션

#### 상품 옵션 등록

✔️ 옵션세트 및 옵션세트 내 옵션은 여러개 생성 가능

✔️ 이미지는 1개만 지정 가능, 옵션은 여러개 생성 가능

✔️ 옵션을 모두 삭제하면 옵션 세트 또한 삭제

#### 추가 옵션 상품 등록

✔️ 옵션 1개당 여러개의 추가 옵션 상품 등록 가능

#### 옵션 내용 등록 영역

✔️ 옵션은 옵션 세트내에서 1개이상 생성 가능

✔️ 상품 정상가, 할인율, 상품 판매가, 재고, 과세 구분 입력 가능

✔️ 비과세: 해당 옵션의 부과세가 0원으로 저장

✔️ 과세: 해당 판매가의 10%가 부과세로 저장

### 상품 이미지

✔️ 이미지 TAP 후 이미지 업로드 시, 우측에 이미지 파일명과 X버튼이 함께 노출

✔️ 추가 첨부 시, 최신업로드 순으로 추가

### 상품 정보 고시

#### 상품 정보 고시 알림 설정

✔️ 정보고시 추가 시, 정보고시 생성 순서 숫자 표기

✔️ '제품명/중량' ~ '식품 유형' 항목까지 타이틀 고정

✔️ 타이틀 우측 내용 입력

✔️ 항목 추가를 통해 정보고시 항목 추가 가능

#### 사용자 배송 출발일 지정

✔️ 토글 버튼 On/Off

✔️ 해당 영역 활성화 시 선주문 예약 배송 비활성화

#### 방문 수령 지정

✔️ 토글 버튼 On/Off

✔️ 해당 영역 활성화 시 선주문 예약 배송 비활성화

#### 선 주문 예약 배송

✔️ 토글 버튼 On/Off

✔️ 해당 영역 활성화 시 위 두 항목 비활성화

### 상품 혜택 허용 설정

#### 마일리지 적립

✔️ 토글 버튼 On/Off

### 기타 설정

#### 감사카드 제공

✔️ 토글 버튼 On/Off

### 저장하기 버튼

✔️ 필수값 미 입력시, 얼럿 제공

✔️ console창에 결과 출력

<!-- </details>

<br/> -->

## 프로젝트 후기
