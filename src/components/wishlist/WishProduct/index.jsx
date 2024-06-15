import React, { useContext } from 'react';
import { StrogeData } from '../../../Context';


const wishProduct = () => {
    const { wishCart,product } = useContext(StrogeData)
    const [wishItem, setWishItem] = wishCart
    const [cartCount, setCartCount] = product

    // add product in cart
    const addToCart = (elem) => {
        if(cartCount){
          let filterData = cartCount.filter((item) => {
              return elem.id  !== item.id
           })
           setCartCount([...filterData,elem])
        }else{
          setCartCount([...elem])
        }
   }

    // remove Item From WishList
    const removeItem = (id) => {
        const filterItem = wishItem.filter((elem) => {
             return elem.id !== id;
        })
        setWishItem(filterItem)
      }
    return (
        <>
            <div className="bg-white p-[30px] mb-[25px]">
                <div className='overflow-x-auto'>
                <table class="w-100">
                    <thead>
                        <tr className='border border-solid'>
                            <th className='border border-solid p-[12px] align-middle'>Product Name</th>
                            <th className='border border-solid p-[12px] align-middle'>Image</th>
                            <th className='border border-solid p-[12px] align-middle'>Unit Price</th>
                            <th className='border border-solid p-[12px] align-middle'>Stock Status</th>
                            <th className='border border-solid p-[12px] align-middle'>Add to Cart</th>
                            <th className='border border-solid p-[12px] align-middle'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishItem && wishItem.map((elem) => {
                                return (
                                    <>
                                        <tr className='border border-solid'>
                                            <td className='border p-[12px] border-solid align-top'>{elem?.title.substring(0, 12)}</td>
                                            <td className='border p-[12px] border-solid align-top'><img className='h-[70px] w-[70px]' src={elem?.image} alt="" /></td>
                                            <td className='border p-[12px] border-solid align-top'>${elem?.price}</td>
                                            <td className='border p-[12px] border-solid align-top'>in a stock</td>
                                            <td className='border p-[12px] border-solid align-top'><span className='text-[--primary-color] cursor-pointer font-semibold' onClick={() => addToCart(elem)}>add to cart</span></td>
                                            <td className='border p-[12px] border-solid align-top'><i className="cursor-pointer text-[red] fa-solid fa-trash-can" onClick={() => removeItem(elem?.id)}></i></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
};

export default wishProduct;


