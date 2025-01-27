import { useDispatch } from "react-redux";
import {
  deCreaseQuantity,
  inCreaseQuatity,
  removeItemFromCart,
} from "../lip/cartSlice";
import toast from "react-hot-toast";
const RowCard = ({ item }) => {
  let dispatch = useDispatch();

  return (
    <>
      <tr className="bg-white border-b" key={item.id}>
        <td className="p-4">
          <img
            src={item.image}
            className="w-16 md:w-32 max-w-full max-h-full"
            alt="Apple Watch"
          />
        </td>
        <td className="px-1 py-2 text-center font-semibold text-gray-900 text-sm md:text-lg">
          Apple Watch
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={() => {
                dispatch(deCreaseQuantity(item.id));
                console.log(items);
              }}
              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only">Quantity button</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h16"
                />
              </svg>
            </button>
            <div className="bg-gray-50 py-2 px-4 border border-gray-300 flex items-center justify-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
              {item.quantity}
            </div>
            <button
              onClick={() => {
                dispatch(inCreaseQuatity(item.id));
                console.log(items);
              }}
              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
              type="button"
            >
              <span className="sr-only">Quantity button</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-2 py-2 font-semibold text-gray-900 text-lg">
          ${item.price}
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => {
              dispatch(removeItemFromCart(item.id));
              toast.success("The product is removed from cart successfully", {
                position: "top-center",
              });
            }}
            className="font-medium bg-red-600 hover:bg-red-700 py-2 px-3 text-white rounded-md text-[16px]"
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default RowCard;
