import GlobalStyles from "./Styled/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
