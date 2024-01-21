import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";

const Header = () => {
  const cart = useSelector((state) => state.products.cart);
  const wishlist = useSelector((state) => state.products.wishlist);
  const [dark, setdark] = useState(false);

  const changeTheme = () => {
    // document.body.className = theme
    setdark(!dark);
  };
  return (
    <>
      <div className=" header">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 w-full">
          <div className="col-md-3 mb-2 mb-md-0">
            <h4>E-Commerce</h4>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={"/"} className="nav-link px-2  text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>
          <div>
            {/* <button
              type="button"
              className="btn btn-primary me-2 "
              onClick={() => {
                changeTheme();
              }}
            >
              {dark === true ? <FaMoon /> : <IoMdSunny />}
            </button> */}
            <Link to={"/wishlist"}>
              <button type="button" className="btn btn-gray me-2  text-white ">
                Wishlist <FaHeart /> {wishlist.length}
              </button>
            </Link>
            <Link to={"/login"}>
              <button
                type="button"
                className="btn btn-outline-primary me-2 text-white"
              >
                Login <MdLogin />
              </button>
            </Link>
            <Link to={"/cart"} className="col-md-3 text-end">
              <button
                style={{ textAlign: "center" }}
                type="button"
                className="btn btn-gray  text-white"
              >
                Cart <AiOutlineShoppingCart />
                {cart.length}
              </button>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
