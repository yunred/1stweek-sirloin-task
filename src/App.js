
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
  const [toggle, setoggle] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <Main>
        <PDdata>
          <ProductSalesperiod />
          <ProductInfo />
          <PDOption />
        </PDdata>
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
`