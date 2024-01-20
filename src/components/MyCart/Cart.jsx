import React, { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
// import './MyCart.css'; // Make sure to create the appropriate CSS file for styling

function MyCart() {
  const { cart } = useContext(ProductContext);

  return (
    <>
      <div className='grid-container gap-6'>
        {cart.map((cartItem, i) => (
          <div key={i} className='flex rounded-md shadow-md bg-white/80 mt-4 p-5 w-[30rem]'>
            <div className='bg-orange-200 p-2 rounded-md'>
              <img
                src={cartItem.productCategory.productCategoryImage}
                alt='Product Category'
                width={50}
                className='p-1'
              />
            </div>
            <div className='flex flex-col ml-4'>
              <p>{cartItem.productCategory.productCategoryName}</p>
              <div className='absolute flex justify-between mt-6'>
                <p className='text-sm mt-4 mr-12'>Quantity: {cartItem.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyCart;
