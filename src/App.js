import GlobalStyle from "./Style/GlobalStyle";
import MDOption from "./Component/MDOption";
import Nav from "./Component/Nav/Nav";
import { useState } from "react";
function App() {
  const [optionSetList, optionSetter] = useState([]);
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <MDOption optionSetter={optionSetter} optionSetList={optionSetList}/>
    </div>
  );
}

export default App;
