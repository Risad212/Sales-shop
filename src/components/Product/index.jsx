import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StrogeData } from "../../Context";

const Product = ({ item }) => {
  let location = useLocation();
  const [saved, setSaved] = useState("fa-regular");
  const { product, wishCart } = useContext(StrogeData);
  const [cartCount, setCartCount] = product;
  const [wishItem, setWishItem] = wishCart;

  // set product in cart
  const addToCart = () => {
    if (cartCount) {
      let filterData = cartCount.filter((elem) => {
        return elem.id !== item.id;
      });
      setCartCount([...filterData, item]);
    } else {
      setCartCount([...item]);
    }
  };

  // set product in wishlist
  const setWishProduct = () => {
    if (wishItem) {
      let filterWish = wishItem.filter((elem) => {
        return elem?.id !== item?.id;
      });
      setWishItem([...filterWish, item]);
      setSaved("fa-solid");
    } else {
      setWishItem([...item]);
    }
  };
  return (
    <>
      <div className="card shadow-[0 3px 10px rgba(146, 146, 146, 0.2)] h-100 text-center p-4">
        <Link to={"/product/" + item?.id}>
          <img
            src={item?.image}
            className="object-contain w-[100%] h-[200px]"
            alt={item?.title}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title fw-bold">{item?.title.substring(0, 12)}</h5>
          <p className="card-text lead fw-bold">${item?.price}</p>
          <button
            className="btn btn-outline-dark px-4"
            onClick={() => addToCart()}
          >
            Add To Cart
          </button>
          <button
            className="btn btn-outline-dark px-2 border-start-0"
            onClick={() => setWishProduct()}
          >
            <i className={`${saved} fa-heart text-[#000] text-[17px]`}></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
