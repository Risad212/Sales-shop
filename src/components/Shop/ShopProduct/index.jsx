import React from "react";
import Product from "../../Product";
import SkeletonLoad from "../../Common/SkeletonLoad";

const ShopProduct = ({ allProduct, loadStatus }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {allProduct &&
          allProduct.map((product) => {
            return (
              <>
                <Product item={product} key={product.id} />
              </>
            );
          })}
        {loadStatus && <SkeletonLoad type="product" />}
      </div>
    </>
  );
};

export default ShopProduct;
