import { useState } from "react";
import GlobalStyle from "Style/GlobalStyle";
import Nav from "Component/Nav/Nav";
import PDOption from "Component/PDoption";
import PDdata from "store/PDdata.js";
import ProductInfo from "Component/ProductInfo";
import Toggle from "Util/Toggle";

const App = () => {  
  const [toggle, setoggle] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <PDdata>
        <PDOption />
        <ProductInfo />
      </PDdata>
    <Toggle
      leftColor = {"blue"}
      circleColor= {"blue"}
    />
    </div>
  );
}
export default App;
