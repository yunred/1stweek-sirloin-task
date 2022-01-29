import styled from "styled-components";
import GlobalStyle from "Style/GlobalStyle";
import Nav from "Component/Nav";
import ProductSalesperiod from './Component/ProductSalesperiod';
import PDOption from 'Component/PDoption';
import PDdata from 'store/PDdata.js';
import ProductInfo from 'Component/ProductInfo';
import ProductInfoNotice from 'Component/ProductInfoNotice';
import ProductDelivery from 'Component/ProductDelivery';
import PDMileage from 'Component/PDMileage';
import ProductImage from 'Component/ProductImage';
import ETC from 'Component/ETC';
import DateTimePickers from 'Util/DateTimePicker';
import { useState } from "react";

const App = () => {
  const [date, setDate] = useState('');
  console.log(date);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Main>
        <PDdata>
          <ProductSalesperiod />
          <ProductInfo />
          <PDOption/>
          <ProductImage/>
          <ProductInfoNotice/>
          <ProductDelivery/>
          <PDMileage/>
          <ETC/>
        </PDdata>
        <DateTimePickers state={date} setState= {setDate} acitve={true}/>
      </Main>
    </div>
  );
};
export default App;

const Main = styled.div`
  margin-left: 10vw;
  padding: 0.5em;
  padding-top: 5vh;
  border: 0.1em solid rgb(200, 200, 200);
  border-radius: 5px;
`;
