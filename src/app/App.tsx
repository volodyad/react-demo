import { Header } from "../components/Header";
import { ListingsPage } from "../pages/ListingsPage";
import "./App.scss";
import "./variables.css";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div>
          <ListingsPage />
        </div>
      </div>
    </Provider>
  );
}

export default App;
