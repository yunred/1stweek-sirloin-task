import { useState } from "react";
import GlobalStyle from "Style/GlobalStyle";
// import Nav from "Component/Nav";
import ProductSalesperiod from "./Component/ProductSalesperiod";
import MDOption from "Component/MDOption";
import PDdata from "store/PDdata";
import ProductInfo from "Component/ProductInfo";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Nav /> */}
      <ProductSalesperiod />
      <PDdata>
        <MDOption />
        <ProductInfo />
      </PDdata>
    </div>
  );
};
export default App;
