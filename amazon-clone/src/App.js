import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
};

export default App;
