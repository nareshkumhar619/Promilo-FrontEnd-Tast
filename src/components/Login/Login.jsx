import React, { useState, useEffect, useContext } from 'react'
import { convertToSHA256 } from '../../utils/TxtToSha256'
import { useNavigate } from 'react-router-dom';
import validation from '../../validationRules.json'
import { auth, provider } from '../../GoogleAuth/config'
import { signInWithPopup } from 'firebase/auth'
import image from '../../images/images.jpeg'
import store from '../../images/prov-store.png'
import google from '../../images/google.png'
import right from '../../images/check.png';
import wrong from '../../images/wrong.png';
import { AuthContext } from '../../Context/AuthContext';
import './Login.css'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTouched, setIsTouched] = useState(true);
  const [value, setValue] = useState('');

  const { setAuthToken } = useContext(AuthContext);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const email = data.user?.email || '';
      setValue(email);
      localStorage.setItem("email", email);
    })
  }

  useEffect(() => {
    const email = localStorage.getItem('email') || '';
    setValue(email);
  },[])

  // console.log(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (email === 'test45@yopmail.com' && password === 'Test@123') {
      // Valid credentials, proceed with login
      navigate('/homepage');
      
      // Include the logic for the POST API request here
      const hashedPassword = await convertToSHA256(password);
  
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', hashedPassword);
      formData.append('grant_type', 'password');
  
      try {
        const response = await fetch('https://apiv2stg.promilo.com/user/oauth/token', {
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': process.env.REACT_APP_AUTHORIZATION
          }
        });
  
        const data = await response.json();
        if (data.response && data.response.access_token) {
          setAuthToken(data.response.access_token);
          localStorage.setItem('access_token', data.response.access_token);
        } else {
          console.log(data.error);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      // Invalid credentials, show an alert
      alert('Invalid credentials. Please try with the test email and password.');
      console.log('Invalid credentials');
    }
  };
  

  const handleBlur = () => {
    setIsTouched(true);
  }

  const handleFocus = () => {
    setIsTouched(false);
  }

  const handleNav = () => {
    navigate('/signup');
  }

  return (
    <div className='flex md:flex-row sm:flex-col'>
      <div>
        <img src={image} alt="background" className='imag mr-2 ml-2 visible' required/>
      </div>
      <div className=''>
        <form onSubmit={handleSubmit} className='absolute shadow-lg space-y-8 -mt-28 md:mt-8 ml-12 md:ml-32 flex flex-col text-start p-8 rounded-xl'>
          <img src={store} alt='store' className='w-[16rem]' />
          <label className='flex flex-col mr-6 ml-1'>
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder=''
              className='border-2 border-slate-300 rounded-md h-8 p-2 mt-1 text-sm bg-transparent'
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
                className='border-2 border-slate-300 rounded-md h-8 p-2 mt-2 text-sm bg-transparent'
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
              value="Sign In"
              className='bg-orange-400 text-white hover:bg-blue-50 hover:text-orange-400 hover:cursor-pointer transition-all w-[16rem] h-[2rem] rounded-lg' />
            <div className='flex space-x-4 mt-4'>
              <span>
                <img src={google} alt='google signin' width={25} onClick={handleClick} className='hover:cursor-pointer'/>
              </span>
              <span className='material-symbols-outlined'>
                mail
              </span>
            </div>
            <p className='text-xs mt-2 underline hover:cursor-pointer' onClick={handleNav}>Don't have an account ?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login