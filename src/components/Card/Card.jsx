import React, { useState, useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import './Card.css';

function Card() {
  const { products, cart, setCart, productCounts, updateProductCount } = useContext(
    ProductContext
  );

  const [counts, setCounts] = useState({}); // State to store counts for each product

  const handleCartClick = (item) => {
    const isItemInCart = cart.some(
      (cartItem) => cartItem.productCategory.orderIndex === item.productCategory.orderIndex
    );

    const currentCount = counts[item.productCategory.orderIndex] || 0;

    if (!isItemInCart && currentCount > 0) {
      // If the item is not in the cart and the count is greater than 0, add it to the cart
      const updatedCart = [...cart, { ...item, quantity: currentCount }];
      setCart(updatedCart);

      // Reset count to 0
      updateProductCount(item.productCategory.orderIndex, 0);
      setCounts((prevCounts) => ({
        ...prevCounts,
        [item.productCategory.orderIndex]: 0,
      }));

      // Show alert
      alert('Product added to the cart. Please check your cart now.');
    }
  };

  const addItem = (product) => {
    const currentCount = counts[product.productCategory.orderIndex] || 0;
    const newCount = currentCount + 1;

    // Update the quantity in the cart
    const updatedCart = cart.map((cartItem) =>
      cartItem.productCategory.orderIndex === product.productCategory.orderIndex
        ? { ...cartItem, quantity: cartItem.quantity + newCount }
        : cartItem
    );

    setCart(updatedCart);

    // Update the count
    updateProductCount(product.productCategory.orderIndex, newCount);
    setCounts((prevCounts) => ({
      ...prevCounts,
      [product.productCategory.orderIndex]: newCount,
    }));

  };

  const subtractItem = (product) => {
    const currentCount = counts[product.productCategory.orderIndex] || 0;

    // Ensure not to decrease the count below zero
    if (currentCount > 0) {
      const newCount = currentCount - 1;

      // Update the quantity in the cart
      const updatedCart = cart.map((cartItem) =>
        cartItem.productCategory.orderIndex === product.productCategory.orderIndex
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );

      setCart(updatedCart);

      // Update the count
      updateProductCount(product.productCategory.orderIndex, newCount);
      setCounts((prevCounts) => ({
        ...prevCounts,
        [product.productCategory.orderIndex]: newCount,
      }));

    }
  };

  return (
    <>
      <div className='grid-container gap-6'>
        {products.map((product, i) => {
          const isInCart = cart.some(
            (cartItem) => cartItem.productCategory.orderIndex === product.productCategory.orderIndex
          ); // Check if the product is in the cart
          const count = counts[product.productCategory.orderIndex] || 0; // Get count for the current product

          return (
            <div key={i} className='flex rounded-md shadow-md bg-white/80 mt-4 p-5 w-[30rem]'>
              <div className='bg-orange-200 p-2 rounded-md'>
                <img
                  src={product.productCategory.productCategoryImage}
                  alt='Product Category'
                  width={50}
                  className='p-1'
                />
              </div>
              <div className='flex flex-col ml-4'>
                <p>{product.productCategory.productCategoryName}</p>
                <div className='absolute flex justify-between mt-6'>
                  <div className='flex text-sm h-8 mt-4 mr-12 space-x-4'>
                    <button
                      className='material-symbols-outlined border-2 rounded-lg'
                      onClick={() => addItem(product)}>
                      add
                    </button>
                    <p className='mt-[0.4rem]'>{count}</p>
                    <button
                      className='material-symbols-outlined border-2 rounded-lg'
                      onClick={() => subtractItem(product)}
                      disabled={count === 0}>
                      remove
                    </button>
                  </div>
                  <button
                    onClick={() => handleCartClick(product)}
                    className=' mt-4 p-1 rounded-md w-[9rem] '
                    style={{ backgroundColor: '#80ed99' }}>
                    Add to cart ({count})
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
