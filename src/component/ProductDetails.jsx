import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { addToCart } from "../lip/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("false");
  let dispatch = useDispatch();
  let { id } = useParams();
  async function getProductDetails(id) {
    try {
      setLoading(true);
      let { data } = await axios(`https://fakestoreapi.com/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getProductDetails(id);
  }, [id]);
  console.log(id);
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-center">
          {loading && <Loading />}
          {product ? (
            <div className="card">
              <h2 className="text-center mb-5 bg-orange-500 text-white py-2 px-3 rounded-lg text-md">
                {product?.title}
              </h2>
              <div className="imgDiv w-full flex justify-center  h-[400px] p-5 -lg mb-5">
                <img
                  src={product?.image}
                  className="w-full sm:w-[400px] h-full shadow-myShadow p-4 rounded"
                  alt=""
                />
              </div>
              <p className="text-center capitalize mb-3">{product?.category}</p>
              <p className="text-center capitalize mb-3 text-xl text-orange-500">
                <i className="fa-solid fa-thumbs-up me-3 text-xl"></i>
                {`$ ${product?.price}`}
              </p>
              <p className="text-center capitalize text-[18px] text-gray-500 mb-5">
                {product?.description}
              </p>
              <div className="w-full text-center ">
                <button
                  onClick={() => {
                    dispatch(addToCart(product));
                    toast.success("The product is added to cart successfully", {
                      position: "top-center",
                    });
                  }}
                  className=" w-fit tracking-[1.5px] py-2 px-6 bg-orange-600 hover:bg-orange-500 transition-all duration-200 ease-in text-white rounded-md"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ) : (
            <p className="w-full text-center">Error in fetching data.....!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
