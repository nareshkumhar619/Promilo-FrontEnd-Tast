import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productCounts, setProductCounts] = useState({});

  const updateProductCount = (orderIndex, count) => {
    setProductCounts((prevCounts) => ({ ...prevCounts, [orderIndex]: count }));
  };

  const contextValue = {
    products,
    setProducts,
    cart,
    setCart,
    productCounts,
    updateProductCount,
  };

  return (
    <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>
  );
};
