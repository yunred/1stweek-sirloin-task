import { useState } from "react";
import GlobalStyle from "Style/GlobalStyle";
import Nav from "Component/Nav/Nav";
import MDOption from "Component/MDOption";
import MDdata from "store/MDdata.js"
import ProductInfo from "Component/ProductInfo";

const App = () => {  
  const [optionSetList, optionSetter] = useState([]);
  const [productInfoList, PISetter] = useState([]);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <MDdata>
        <MDOption/>
      </MDdata>
      <ProductInfo productInfoList={productInfoList} PISetter={PISetter}/>

    </div>
  );
}

export default App;
