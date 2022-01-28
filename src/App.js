import { useState } from 'react';
import GlobalStyle from 'Style/GlobalStyle';
// import Nav from "Component/Nav";
import ProductSalesperiod from './Component/ProductSalesperiod';
import PDOption from 'Component/PDoption';
import PDdata from 'store/PDdata.js';
import ProductInfo from 'Component/ProductInfo';
import ProductInfoNotice from 'Component/ProductInfoNotice';
import ProductDelivery from 'Component/ProductDelivery';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Nav /> */}
      <ProductSalesperiod />
      <PDdata>
        <PDOption />
        <ProductInfo />
        <ProductInfoNotice />
        <ProductDelivery />
      </PDdata>
    </div>
  );
};
export default App;
