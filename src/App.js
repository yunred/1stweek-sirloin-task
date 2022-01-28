import { useState } from "react";
import GlobalStyle from "Style/GlobalStyle";
import Nav from "Component/Nav/Nav";
import MDOption from "Component/MDOption";
import MDdata from "store/MDdata.js";
import ProductInfo from "Component/ProductInfo";
import PIdata from "store/PIData";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <MDdata>
        <MDOption />
      </MDdata>
      <PIdata>
        <ProductInfo />
      </PIdata>
    </div>
  );
}
export default App;
