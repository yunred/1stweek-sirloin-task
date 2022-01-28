import React, { createContext, useState } from 'react';

export const PDcontext = createContext();

const PDdata = props => {
  const [OptionSetList, setOptionLIst] = useState([]);
  const [ProductInfoList, setProductInfoLIst] = useState(PIData);
  const [ProductInfoOrder, setProductInfoOrder] = useState([PIOrder]);
  const [PDMileage, setPDMileage] = useState(true);
  const PDdata = {
    OptionSetData: {
      state: OptionSetList,
      setstate: setOptionLIst,
    },
    PIData: {
      state: ProductInfoList,
      setState: setProductInfoLIst,
    },
    PIOrder: {
      state: ProductInfoOrder,
      setState: setProductInfoOrder,
    },
    PDMileage:{
      state: PDMileage,
      setState: setPDMileage,
    }
  };

  return (
    <PDcontext.Provider value={PDdata}>{props.children}</PDcontext.Provider>
  );
};

const PIData = {
  categoryList: [
    { idx: 1, checked: false, content: '카테고리1' },
    { idx: 2, checked: false, content: '카테고리2' },
    { idx: 3, checked: false, content: '카테고리3' },
    { idx: 4, checked: false, content: '카테고리4' },
    { idx: 5, checked: false, content: '카테고리5' },
    { idx: 6, checked: false, content: '카테고리6' },
  ],
  filterTagList: [
    { idx: 1, checked: false, content: '가나다' },
    { idx: 2, checked: false, content: '가나' },
    { idx: 3, checked: false, content: '가나다라' },
    { idx: 4, checked: false, content: '가가가' },
    { idx: 5, checked: false, content: '가나다라마' },
    { idx: 6, checked: false, content: '가가나' },
  ],
  product: {
    idx: '',
    category: [],
    filterTag: [],
    name: '',
    description: '',
    thumbnail: '',
    imgs: [],
    stock: '',
  },
};

const PIOrder = {
  productname: '',
  origin: '',
  rating: '',
  productstorage: '',
  category: '',
  moreinfo: [],
};

export default PDdata;
