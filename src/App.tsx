import { BrowserRouter } from "react-router-dom";
import { Routing } from "./pages";
import { Provider } from "react-redux";
import "./styles/global.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
