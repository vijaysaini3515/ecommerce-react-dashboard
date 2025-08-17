import React from 'react';
import './forgotPassword.scss'
import whiteBgImg from '../../assets/images/LoginImg.webp';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import { BiLogInCircle } from "react-icons/bi";
import { PiUserCircleDashed } from "react-icons/pi";

const ForgotPassword = () => {

    


  return (
    <section className="relative h-[100vh]"> {/* Added relative positioning */}
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-20 w-full px-4 py-2 flex items-center justify-between'>
        <Link>
          <img className='w-[120px]' src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" alt="Logo" />
        </Link>
        <div className='flex items-center gap-4'>
          <NavLink to='/login' className={({ isActive }) => (isActive ? 'isActive' : '')}>
            <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-4 flex items-center gap-2 !normal-case'>
              <BiLogInCircle className='text-[18px]' /> LogIn
            </Button>
          </NavLink>
          <NavLink to='/signup' className={({ isActive }) => (isActive ? 'isActive' : '')}>
            <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-4 flex items-center gap-2 !normal-case'>
              <PiUserCircleDashed className='text-[18px]' /> SignUp
            </Button>
          </NavLink>
        </div>
      </header>

      {/* Background Image */}
      <img 
        className="w-full fixed top-0 left-0 right-0 z-0" 
        src={whiteBgImg} 
        alt="Background"
        style={{ objectFit: 'cover', height: '100vh',}} 
      />

      

      <div className='w-full h-full flex items-center justify-center relative '>
        <div className="loginBox card w-[500px] h-auto  mx-auto my-auto   relative z-10"> 
          <div className="text-center p-4">
            <img src={logo} alt="Logo" className="m-auto w-[100px]" />
          </div>

          <h1 className='font-[800] text-[35px] text-center mt-4'>Having trouble to sign in? <br/> Reset your password.</h1>


            <form className='w-full px-8 mt-3'>
            
              <div className='form-group mb-4 w-full'>
                  <h4 className='text-white'>Email</h4>
                  <input 
                    type="email" 
                    placeholder='Enter your email ...' 
                    className='w-full bg-white text-black h-[45px] px-3 border-2 border-[rgba(0,0,0,0,2)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none'
                  />
              </div>
              
              <Button className='btn-lg w-full !capitalize'>Sign In</Button>
              <br/>
              <br/>
              <div className='text-center flex items-center justify-center gap-2'>
                <span className='text-[rgba(255,255,255,0.8)] '>Don't want to reset?</span>
                <Link to='/login' className='text-[rgba(255,255,255)] font-[600] text-[14px] hover:underline hover:text-[rgba(255,255,255,0.7)]'>Sign In</Link>
              </div>


            </form>

        </div>
      </div>

      
     
     
    </section>
  );
}

export default ForgotPassword;
