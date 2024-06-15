import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductFilter from "./ProductFilter";
import ShopProduct from "./ShopProduct";

const ShopPage = () => {
  const [item, setItem] = useState([]);
  const [allItem, setAllItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setItem(response.data);
        setAllItem(response.data);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };
    getItem();
  }, []);

  // Filter  Data category wise
  const getUniqueData = (category) => {
    if (category !== "all") {
      let newValue = allItem.filter((elem) => {
        return elem.category === category;
      });
      setItem(newValue);
    } else {
      setItem(allItem);
    }
  };

  // Filter Data search field
  const getSearchData = (searchText) => {
    if (searchText) {
      allItem
        .filter((item) => item.title.toLowerCase().includes(searchText))
        .map((elem) => {
          setItem([elem]);
        });
    } else {
      setItem(allItem);
    }
  };

  // clear Input Field
  const clearInput = (input) => {
    if (input) {
      setItem(allItem);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <ProductFilter
              getDataFun={getUniqueData}
              searchFilter={getSearchData}
              clearSearch={clearInput}
            />
          </div>
          <div className="col-span-8">
             <ShopProduct allProduct={item} loadStatus={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
