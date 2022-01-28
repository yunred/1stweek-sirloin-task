import { useState } from "react";
import GlobalStyle from "Style/GlobalStyle";
import Nav from "Component/Nav/Nav";
import MDOption from "Component/MDOption";
import MDdata from "store/MDdata.js"


function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <MDdata>
        <MDOption/>
      </MDdata>
    </div>
  );
}

export default App;
