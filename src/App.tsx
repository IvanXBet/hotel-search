import { BrowserRouter } from "react-router-dom";
import { Routing } from "./pages";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
