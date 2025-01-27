import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import RowCard from "./RowCard";
const Cart = () => {
  let { items, totalPrice } = useSelector((state) => state.cart);
  console.log(items);
  let navigate = useNavigate();
  return (
    <section className="text-red-500">
      <div className="container">
        <div className="row overflow-x-scroll md:overflow-hidden">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {items?.length > 0 &&
                items.map((item) => {
                  return <RowCard item={item} key={item.id} />;
                })}
            </tbody>
          </table>
          {/* if there is no item in cart */}
          {items?.length == 0 && (
            <div className="w-full text-center mt-10 mb-5" role="alert">
              <span className="my-5 p-4 text-gray-200 rounded-lg bg-gray-900 text-[18px] tracking-[1px]">
                There is no items in cart..........!
              </span>
            </div>
          )}
          {/* >>>>>>>>>>>
            Cart Details (Button(Go to home) & TotalPrice)
          >>>>>>>>>>>>>>>*/}
        </div>
        <div className="w-full flex-col sm:flex-row flex items-center justify-center mt-10">
          <h2 className="text-2xl mb-5 text-black sm:me-12">
            {" "}
            Total price : <span className="text-blue-700"> ${totalPrice}</span>
          </h2>
          <button
            onClick={() => navigate("/")}
            className="w-fit py-2 px-4 mb-5 bg-orange-600 hover:bg-orange-500 transition-all duration-200 ease-in text-white rounded-md"
          >
            Go To Shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
