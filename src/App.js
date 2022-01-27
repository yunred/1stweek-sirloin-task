import GlobalStyle from "./Style/GlobalStyle";
import MDOption from "./Component/MDOption";
// import Nav from "./Component/Nav";
import ProductSalesperiod from "./Component/ProductSalesperiod";
import { useState } from "react";

function App() {
  const [optionSetList, optionSetter] = useState([]);

  return (
    <div className="App">
      <GlobalStyle />
      {/* <Nav /> */}
      <ProductSalesperiod />
      <MDOption optionSetter={optionSetter} optionSetList={optionSetList} />
    </div>
  );
}

export default App;
