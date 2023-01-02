import { createGlobalStyle } from "styled-components";
import Main from "./component/main/Main";

const GlobalStyle = createGlobalStyle`
  *, *:: before, *:: after {
    box-sizing: border-box;
    padding:0px;
    margin:0px;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Main />
      </div>
    </>
  );
}

export default App;
