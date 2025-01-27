import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./component/MyNav";
import Home from "./component/Home";
import Cart from "./component/Cart";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
