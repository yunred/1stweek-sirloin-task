import GlobalStyle from "./Style/GlobalStyle";
import Container from "Component/Container";
import Nav from "./Component/Nav/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Container />
    </div>
  );
}

export default App;
