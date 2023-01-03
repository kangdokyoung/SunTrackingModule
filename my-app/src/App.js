import { RecoilRoot } from "recoil";
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
      <RecoilRoot>

      <div className="App">
        <Main />
      </div>
      </RecoilRoot>
    </>
  );
}

export default App;
