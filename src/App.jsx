import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./component/MyNav";
import Home from "./component/Home";
import Cart from "./component/Cart";
import NotFound from "./component/NotFound";
import ProductDetails from "./component/ProductDetails";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="productdetails/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
