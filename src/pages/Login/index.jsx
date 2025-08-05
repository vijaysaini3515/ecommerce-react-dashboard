import React from 'react';
import './login.scss'
import whiteBgImg from '../../assets/images/LoginImg.webp';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import { BiLogInCircle } from "react-icons/bi";
import { PiUserCircleDashed } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";

const Login = () => {

    const [loadingGoogle, setLoadingGoogle] = React.useState(false);
    const [loadingFacebook, setLoadingFacebook] = React.useState(false);



    function handleClickGoogle() {
        setLoadingGoogle(true);
    };

    function handleClickFacebook() {
        setLoadingFacebook(true);
    };


  return (
    <section className="relative"> {/* Added relative positioning */}
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
        style={{ objectFit: 'cover', height: '100vh' }} 
      />

      <div className="loginBox card w-[45%] h-[300px] mx-auto mt-10  relative z-10"> 
        <div className="text-center p-4">
          <img src={logo} alt="Logo" className="m-auto w-[100px]" />
        </div>
        <h1 className='font-[800] text-[35px] text-center mt-4'>Welcome Back <br/> SignIn with your credential.</h1>
            <div className='flex items-center justify-center gap-5 mt-5'>
                <Button
                    size="small"
                    onClick={handleClickGoogle}
                    endIcon={<FcGoogle />}
                    loading={loadingGoogle}
                    loadingPosition="end"
                    variant="outlined"
                    className='!text-[rgba(0,0,0,0.7)] !bg-none !text-[16px] !capitalize !border !border-white !px-5'
                >
                        SignIn With Google
                </Button>
                <Button
                    size="small"
                    onClick={handleClickFacebook}
                    endIcon={<RiFacebookCircleFill />}
                    loading={loadingFacebook}
                    loadingPosition="end"
                    variant="outlined"
                    className='!text-[rgba(0,0,0,0.7)] !bg-none !text-[16px] !capitalize !border !border-white !px-5'
                >
                        SignIn With Facebook
                </Button>
        </div>
      </div>
     
    </section>
  );
}

export default Login;
