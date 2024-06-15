import React, { useContext, useEffect, useState } from "react";
import { StrogeData } from "../../Context";
import { Link } from "react-router-dom";
import Logo from "@public/media/logo.png";

const Header = () => {
  const { product, wishCart } = useContext(StrogeData);
  const [cartCount, setCartCount] = product;
  const [wishItem, setWishItem] = wishCart;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const countTotal = Object.entries(cartCount).reduce(function (total, pair) {
      const [key, value] = pair;
      return total + value.price;
    }, 0);
    setTotalPrice(Math.floor(countTotal));
  }, [cartCount]);

  return (
    <>
      <div className="py-[2px] bg-[--primary-color]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center lg:flex-row sm:flex-col py-[5px]">
            <div>
              <span className="ps-[10px] text-[14px] text-white">
                <i className="px-[5px] fa-solid fa-phone"></i> 1-284-676-2886
              </span>
              <span className="ps-[10px] text-[14px] text-white">
                <i className="px-[5px] fa-solid fa-envelope"></i>
                info@salesshop.com
              </span>
            </div>
            <div className="social sm:text-center">
              <Link className="text-[14px] me-[15px] text-[#fff]" href="#">
                <span className="hover:bg-[#fff] border-1 items-center transition duration-150 w-[30px] h-[30px] rounded-[50%] inline-flex justify-center border-[#fff] text-center">
                  <i className="hover:text-[--primary-color] text-[13px] fa-brands fa-facebook-f"></i>
                </span>
              </Link>
              <Link className="text-[14px] me-[15px] text-[#fff]" href="#">
                <span className="hover:bg-[#fff] border-1 items-center transition duration-150 w-[30px] h-[30px] rounded-[50%] inline-flex justify-center border-[#fff] text-center">
                  <i className="hover:text-[--primary-color] text-[13px] fa-brands fa-twitter"></i>
                </span>
              </Link>
              <Link className="text-[14px] me-[15px] text-[#fff]" href="#">
                <span className="hover:bg-[#fff] border-1 items-center transition duration-150 w-[30px] h-[30px] rounded-[50%] inline-flex justify-center border-[#fff] text-center">
                  <i className="hover:text-[--primary-color] text-[13px] fa-brands fa-instagram"></i>
                </span>
              </Link>
              <Link className="text-[14px] me-[15px] text-[#fff]" href="#">
                <span className="hover:bg-[#fff] border-1 items-center transition duration-150 w-[30px] h-[30px] rounded-[50%] inline-flex justify-center border-[#fff] text-center">
                  <i className="hover:text-[--primary-color] text-[13px] fa-brands fa-youtube"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container">
          <Link to="/" className="text">
            <img src={Logo} alt="" />
          </Link>
          <div className="flex items-center transition">
            <ul className="ml-auto flex mr-[16px]">
              <li className="text-[16px] mr-[20px] font-medium">
                <Link to="/">Home</Link>
              </li>
              <li className="text-[16px] mr-[20px] font-medium">
                <Link to="shop">Shop</Link>
              </li>
              <li className="text-[16px] mr-[20px] font-medium">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="text-[16px] mr-[20px] font-medium">
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className="text-[16px] mr-[20px] font-medium">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="position-relative">
              <button className=":hover bg-[--primary-color] py-[8px] px-[12px] rounded-md text-white me-2">
                My Account
              </button>
              <Link to="/wishlist" className="relative">
                <i className="fa-sharp fa-regular fa-heart me-4 ms-1 text-[18px]"></i>
                <span className="absolute w-[2rem] h-[2rem] right-[-3px] rounded-[50%] bg-[--primary-color] box-border text-[12px] text-white flex justify-center items-center top-[-12px]">{wishItem?.length}</span>
              </Link>
              <Link to="/cart" className="relative">
                <span className="pe-1 ps-1 fw-bold">
                  ${cartCount ? totalPrice : 0.0}
                </span>
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="absolute w-[2rem] h-[2rem] right-[-25px] rounded-[50%] bg-[--primary-color] box-border text-[12px] text-white flex justify-center items-center top-[-12px]">{cartCount?.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Header;
