import React from 'react';
import BlogSidebar from './BlogSIdebar';
import WishProduct from './WishProduct'

const WishlistPage = () => {
    return (
        <div className='wishlist'>
           <div className="container">
               <div className="grid grid-cols-12 gap-4 py-5">
                  <div className="col-span-8">
                     <WishProduct />
                  </div>
                  <div className="col-span-4">
                     <BlogSidebar />
                  </div>
               </div>
           </div>
        </div>
    );
};

export default WishlistPage;