import { useState } from "react";
import GlobalStyle from "Style/GlobalStyle";
import Nav from "Component/Nav";
import ProductSalesperiod from "./Component/ProductSalesperiod";
import MDOption from "Component/MDOption";
import MDdata from "store/MDdata.js";
import ProductInfo from "Component/ProductInfo";

function App() {
  const [productInfoList, PISetter] = useState([]);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <ProductSalesperiod />
      <MDdata>
        <MDOption />
      </MDdata>
      <ProductInfo productInfoList={productInfoList} PISetter={PISetter} />
    </div>
  );
}

export default App;
