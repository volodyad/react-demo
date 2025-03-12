import { Header } from "../components/Header";
import { ListingsPage } from "../pages/ListingsPage";
import "./App.scss";
import "./variables.css";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="header">
          <Header></Header>
        </header>
        <div className="content">
          <ListingsPage />
        </div>
      </div>
    </Provider>
  );
}

export default App;
