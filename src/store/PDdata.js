import React, { createContext, useState } from 'react';
import PIData  from 'Component/ProductInfo/data';

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

const PIOrder = {
  productname: '',
  origin: '',
  rating: '',
  productstorage: '',
  category: '',
  moreinfo: [],
};

export default PDdata;
