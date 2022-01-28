import { useState } from "react";
import GlobalStyle from "Style/GlobalStyle";
// import Nav from "Component/Nav";
import ProductSalesperiod from "./Component/ProductSalesperiod";
import PDOption from "Component/PDoption";
import PDdata from "store/PDdata.js";
import ProductInfo from "Component/ProductInfo";
import Toggle from "Util/Toggle";

const App = () => {  
  const [toggle, setoggle] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Nav /> */}
      <ProductSalesperiod />
      <PDdata>
        <PDOption />
        <ProductInfo />
      </PDdata>
    </div>
  );
};
export default App;
