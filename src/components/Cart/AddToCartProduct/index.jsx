import React, { useContext, useEffect, useState } from 'react';
import {StrogeData} from '../../../Context';

const AddToCartProduct = ({ cartProduct,cartTotal }) => {
   const {product} = useContext(StrogeData);
    const [cartCount, setCartCount] = product
   const [count, setCount] = useState(1)
   const [sign, setSign] = useState(null);

   const removeItem = (id) => {
     const filterItem = cartCount.filter((elem) => {
          return elem.id !== id;
     })
     setCartCount(filterItem)
   }
  
   useEffect(() => {
      cartTotal(Math.floor(cartProduct.price),sign);
   },[count])

   const {title,image,price,id} = cartProduct

   return (
      <>
       <td>{title?.substring(0, 12)}</td>
         <td><img src={image} style={{width: '70px', height: '70px',}} alt={title} /></td>
         <td>{price}</td>
         <td>In Stock</td>
         <td>
         <div className='input d-flex align-items-center'>
               <button className='text-30 border-none bg-none font-medium ' onClick={() => {
                  if (count >= 2) {
                     setCount(count - 1);
                     setSign('minus')
                  } else {
                     setCount(count);
                     setSign('minus')
                  }
               }}>-</button>
               <span className='w-40 h-40 rounded-10 border border-solid py-5 my-8 font-semibold flex items-center justify-center'>{count}</span>
               <button className='text-30 border-none bg-none font-medium ' onClick={() => [setCount(count + 1),setSign('plus')]}>+</button>
            </div>
         </td>
         <td><h5 className='ms-2 text-20 color-[red] cursor-pointer' onClick={(e) => removeItem(cartProduct?.id)}><i className="fa-solid fa-xmark"></i></h5></td>  
      </>
   );
};

export default AddToCartProduct;






