import React, { useState } from 'react';

const ProductFilter = ({ getDataFun, searchFilter, clearSearch }) => {
   const [emptyInput, setEmptyInput] = useState(false)
   const [input,setInput] = useState('') 
   // clear the input
   const emtpyFun = () => {
      setEmptyInput(true)
   }

   // tiger the function when change on input
   const changeInput = (value) => {
      setInput(value);
      setEmptyInput(false)
   }
   return (
      <div>
         <input type="text" placeholder='Search' className='border-1 w-50 mb-[25px] outline-none py-[5px] px-[11px]' onChange={(e) => [searchFilter(e.target.value),changeInput(e.target.value)]} value={emptyInput? '': input}/>
         <h4 className='text-[22px] my-[15px]'>Category</h4>
         <ul>
            <li className='text-[18px] mb-[10px]  cursor-pointer' onClick={() => getDataFun(`all`)}>All</li>
            <li className='text-[18px] mb-[10px]  cursor-pointer' onClick={() => getDataFun(`men's clothing`)}>Men</li>
            <li className='text-[18px] mb-[10px]  cursor-pointer' onClick={() => getDataFun(`women's clothing`)}>Women</li>
            <li className='text-[18px] mb-[10px]  cursor-pointer' onClick={() => getDataFun(`jewelery`)}>Jewelery</li>
            <li className='text-[18px] mb-[10px]  cursor-pointer' onClick={() => getDataFun(`electronics`)}>Electronic</li>
         </ul>
         <button className='text-white text-[14px] font-medium py-[8px] px-[10px] mt-[15px] bg-[--primary-color] border-[1px solid var(--primary-color)]' onClick={() => [clearSearch('clear'), emtpyFun()]}>CLEAR FILTERS</button>
      </div>
   );
};

export default ProductFilter;

