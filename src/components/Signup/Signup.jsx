import React, { useState } from 'react'
import { convertToSHA256 } from '../../utils/TxtToSha256'
import { useNavigate } from 'react-router-dom';
import validation from '../../validationRules.json'
import store from '../../images/prov-store.png'
import google from '../../images/google.png'
import right from '../../images/check.png';
import wrong from '../../images/wrong.png';
import './Signup.css';

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTouched, setIsTouched] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hashedPassword = await convertToSHA256(password);

        navigate('/homepage');
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', hashedPassword);
        formData.append('grant_type', 'password');

        const response = await fetch('https://apiv2stg.promilo.com/user/oauth/token', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': process.env.REACT_APP_AUTHORIZATION
            }
        })

        const data = await response.json();
        if (data.response && data.response.access_token) {
            localStorage.setItem('access_token', data.response.access_token);
        } else {
            console.log(data.error);
        }
    }

    const handleBlur = () => {
        setIsTouched(true);
    }

    const handleFocus = () => {
        setIsTouched(false);
    }
    return (
        <div className='flex md:flex-row sm:flex-col'>
            <div>
                <p className='absolute md:relative mt-[6rem] md:mt-[14rem] ml-16 md:ml-40 text-8xl font-bold textcol'>Welcome.</p>
            </div>
            <div className=''>
                <form onSubmit={handleSubmit} className='absolute shadow-lg space-y-4 mt-56 md:mt-8 ml-12 md:ml-32 flex flex-col text-start p-8 rounded-xl'>
                    <img src={store} alt='store' className='w-[16rem]' />
                    <label className='flex flex-col mr-6 ml-1'>
                        <p>Name</p>
                        <input
                            type="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder=''
                            className='border border-red-500 rounded-md h-8 p-2 mt-1 text-sm bg-transparent'
                            required
                        />
                    </label>
                    <label className='flex flex-col mr-6 ml-1'>
                        <p>Email</p>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder=''
                            className='border border-red-500 rounded-md h-8 p-2 mt-1 text-sm bg-transparent'
                            required
                        />
                    </label>
                    <div className='flex flex-col'>
                        <label className='flex flex-col mr-6 ml-1'>
                            <p>Password</p>
                            <input
                                type="password"
                                value={password}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                onChange={e => setPassword(e.target.value)}
                                className='border border-red-500 rounded-md h-8 p-2 mt-2 text-sm bg-transparent'
                                required
                            />
                        </label>
                        <div>
                            {!isTouched && (
                                validation.map((rule, index) => (
                                    <div key={index} className='flex text-sm ml-1 mt-1 transition-all'>
                                        {new RegExp(rule.regex).test(password) ? <img src={right} alt="Right" width={20} /> : <img src={wrong} alt="Wrong" width={20} />}
                                        <p style={{ color: new RegExp(rule.regex).test(password) ? 'green' : 'red' }} className='ml-1 mt-[0.1rem]'>
                                            {rule.message}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <input
                            type="submit"
                            value="Get Started"
                            className='bg-orange-400 text-white hover:bg-blue-50 hover:text-orange-400 hover:cursor-pointer transition-all w-[16rem] h-[2rem] rounded-lg' />
                        <div className='flex space-x-4 mt-4'>
                            <span>
                                <img src={google} alt='google signin' width={25} className='hover:cursor-pointer' />
                            </span>
                            <span className='material-symbols-outlined'>
                                mail
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup