import { useDispatch } from "react-redux";
import { addToCart } from "../lip/cartSlice";
const Products = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="card text-center shadow-myShadow p-5 w-full sm:w-[42%] md:w-[32%] lg:w-[22%] border border-gray-200 mb-5">
      <div className="imgDiv h-[300px] mb-5">
        <img src={product.image} className="w-full h-full" alt="" />
      </div>
      <h2 className="title capitalize text-[16px] text-gray-500 mb-3">
        {product.title.split(" ").slice(0, 2).join(" ")} ...
      </h2>
      <p className="Price capitalize mb-2 text-[18px]">
        {" "}
        Price : ${product.price}
      </p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className=" w-full py-2 px-4 bg-orange-600 hover:bg-orange-500 transition-all duration-200 ease-in text-white rounded-md"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Products;
