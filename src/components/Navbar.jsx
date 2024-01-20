import React from 'react'
import logo from '../images/prov-store.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const gocart = () => {
        navigate('/mycart');
    }

    const goAbout = () => {
        navigate('/about');
    }

    return (
        <div>
            <div className='absolute md:relative mt-2 ml-24 md:ml-4 flex md:shadow-md justify-between'>
                <div className='flex items-center'>
                    <img src={logo} alt='logo' width={120} className='ml-12' />
                    <p className='text-lg'>Provision Store</p>
                </div>
                <div className='invisible md:visible flex items-center'>
                    <span class="material-symbols-outlined mr-8" onClick={gocart}>
                        shopping_cart
                    </span>
                    <button className='mr-24 underline' onClick={goAbout}>About</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar