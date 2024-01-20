import React, { useContext, useState, useEffect } from 'react';
import './Homepage.css';
import { AuthContext } from '../../Context/AuthContext';
import { ProductContext } from '../../Context/ProductContext';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import Navbar from '../Navbar';

function HomePage() {
  const { authToken } = useContext(AuthContext);
  const { setProducts } = useContext(ProductContext);
  const { setCart } = useContext(ProductContext);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const url = "https://api.kalpav.com/api/v1/product/category/retail";
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const data = result;
      setData(data.response);
      setProducts(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    let filteredProducts = [];

    if (searchTerm.trim() === "") {
      setProducts(data); // Reset to all products if the search term is empty
    } else {
      filteredProducts = data.filter((product) =>
        product.productCategory.productCategoryName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  };

  const navigate = useNavigate();

  const goCart = () => {
    navigate('/mycart');
  };

  const goAbout = () => {
    navigate('/about');
  };

  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center absolute md:relative mt-32 md:mt-12'>
        <div className='flex flex-col'>
          <input
            type='search'
            placeholder='Search something'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='p-4 searchbar ml-28 md:ml-4 mr-4'
            onKeyUp={handleSearch}
          />
          <div className='visible md:invisible flex '>
            <span class="material-symbols-outlined mr-8" onClick={goCart}>
              shopping_cart
            </span>
            <button className='mr-24 underline' onClick={goAbout}>
              About
            </button>
          </div>
        </div>
        <Card />
      </div>
    </>
  );
}

export default HomePage;
