import Products from "./Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../lip/productSlice";
import Loading from "./Loading";

const Home = () => {
  let { products, loading, error } = useSelector((state) => state.allProducts);
  useSelector((state) => console.log(state.cart));
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <section className="">
      <div className="container">
        <div className="row">
          {loading && <Loading />}
          {error && (
            <div
              className="w-full text-center p-2 mb-4 text-lg text-red-800 rounded-lg bg-red-50"
              role="alert"
            >
              {error}
            </div>
          )}
          {!loading &&
            products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
