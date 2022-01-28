import { useState } from "react";
import GlobalStyle from "Style/GlobalStyle";
import Nav from "Component/Nav/Nav";
import PDOption from "Component/PDoption";
import PDdata from "store/PDdata.js";
import ProductInfo from "Component/ProductInfo";

const App = () => {  

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <PDdata>
        <PDOption />
        <ProductInfo />
      </PDdata>
    </div>
  );
}
export default App;
