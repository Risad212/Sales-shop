import React, { useContext, useEffect, useState } from 'react';

import { StrogeData } from '../../../Context';

const CartSidebar = ({ cartDetails }) => {
  const {product} = useContext(StrogeData);
    const [cartCount, setCartCount] = product
  const [subTotal, setSubTotal] = useState(0)
  const [countValue, setCountValue] = useState(0)

  const countTotal = Object.entries(cartCount).reduce(function (total, pair) {
    const [key, value] = pair;
    return total + value.price
  }, 0);

  useEffect(() => {
    setSubTotal(Math.floor(countTotal))
  }, [cartCount])

  useEffect(() => {
    if (cartDetails) {
      const { sign, amount } = cartDetails;
      if (sign === 'plus') {
        setSubTotal(subTotal + amount);
        setCountValue(countValue + 1)
      } else if (sign === 'minus') {
        setSubTotal(subTotal - amount)
        setCountValue(countValue - 1)
      }
    }
  }, [cartDetails])
  
  return (
    <div className='border border-solid p-[1rem] bg-white'>
      <h2 className='font-normal text-[30px] mb-[40px]'>Order Summary</h2>
      <h6 className='text-[18px] flex justify-center mb-30'>subtotal: <span>${subTotal}</span></h6>
      <h6 className='text-[18px] flex justify-center mb-30'>Shipping: <span>$15</span></h6>
      <h6 className='text-[18px] flex justify-center mb-30'>Total: <span>${cartCount? (subTotal + cartCount.length * 15 + countValue * 15): (0)}</span></h6>
      <button className='px-8 py-30 border-none bg-[--primary-color] text-white font-semibold w-[100%] mt-15'>Checkout</button>
    </div>
  );
};

export default CartSidebar;






