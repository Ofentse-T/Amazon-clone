import "./App.css";
import Home from "./components/Home";
import { ProductDetails } from "./components/ProductDetails";
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
        <Route path="/product-details/:id">
          <ProductDetails />
        </Route>
      </main>
    </div>
  );
};

export default App;
