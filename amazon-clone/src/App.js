import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
};

export default App;
