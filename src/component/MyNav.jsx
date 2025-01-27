import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const MyNav = () => {
  let { items } = useSelector((state) => state.cart);

  return (
    <>
      <nav className="w- py-4 bg-white border-gray-200 shadow-myShadow fixed left-0 top-0 right-0 z-[99]">
        <div className="container">
          <div className="row">
            <Link
              to={"/"}
              className="logo flex items-center space-x-3 rtl:space-x-reverse"
            >
              <i className="fa-solid fa-shopping-cart text-2xl sm:text-3xl text-orange-500 hidden sm:block"></i>
              <span className="self-center font-bold text-xl whitespace-nowrap text-blue-600">
                ShoppingCart
              </span>
            </Link>

            <div className="" id="navbar-default">
              <ul className="font-medium flex md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <li className="px-2">
                  <NavLink
                    to="/"
                    className="block py-1 rounded-sm md:bg-transparent text-[17px] text-gray-400 md:p-0"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="px-2 ">
                  <NavLink
                    to="/cart"
                    className="py-1 rounded-sm md:bg-transparent text-[17px] text-gray-400 md:p-0 flex items-center"
                  >
                    <span>Cart</span>
                    <span className="flex items-center justify-center text-blue-600 ms-1 text-[17px]">
                      ( {items.length} )
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNav;
