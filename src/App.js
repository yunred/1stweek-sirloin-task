import { useState } from "react";
import GlobalStyle from "Style/GlobalStyle";
import Nav from "Component/Nav/Nav";
import MDOption from "Component/MDOption";
import MDdata from "store/MDdata.js";
import ProductInfo from "Component/ProductInfo";

const App = () => {  

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <MDdata>
        <MDOption />
        <ProductInfo />
      </MDdata>
    </div>
  );
}
export default App;
