import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../Product';
import SkeletonLoad from '../../Common/SkeletonLoad';
import TitleBorder from '../../Common/TitleBorder';

const Products = () => {
  const [product, setProduct] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [filter, setFilter] = useState(product)
  
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true)
      try{
        const response = await axios.get('https://fakestoreapi.com/products')
        setProduct(response.data)
        setFilter(response.data)
        setIsLoading(false)
      }
      catch{
        setIsLoading(false)
      }
    }
    getProduct()
  }, [])
  return (
    <div className='mt-[3rem] mb-[5rem]'>
      <div className='container'>
        <h2 className='py-[15px] px-[19px]text-center font-medium text-[35px] text[#2c2a2a]'>Featured Products</h2>
        <TitleBorder />
        <div className="grid grid-cols-4 gap-4">
          {
            product &&
               product.map((product) => {
                return (
                  <>
                    <Product item={product} key={product.id}/>
                  </>
                )
              })
            }
            {
              isLoading && <SkeletonLoad type="product"/>
            }
        </div>
      </div>
    </div>
  );
};

export default Products;



