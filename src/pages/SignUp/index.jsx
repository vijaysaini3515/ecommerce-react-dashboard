import React from 'react';
import './signup.scss'
import whiteBgImg from '../../assets/images/LoginImg.webp';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { BiLogInCircle } from "react-icons/bi";
import { PiUserCircleDashed } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {

    const [loadingGoogle, setLoadingGoogle] = React.useState(false);
    const [loadingFacebook, setLoadingFacebook] = React.useState(false);
    const [isShowPassword,setIsShowPassword] = React.useState(false);



    function handleClickGoogle() {
        setLoadingGoogle(true);
    };

    function handleClickFacebook() {
        setLoadingFacebook(true);
    };


  return (
    <section className="relative"> {/* Added relative positioning */}
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-20 w-full px-4 py-2 flex items-center justify-center sm:justify-between'>
        <Link>
          <img className='w-[120px]' src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" alt="Logo" />
        </Link>
        <div className='hidden sm:flex items-center gap-4'>
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

      <div className="loginBox card w-[500px] h-[300px] mx-auto mt-10 sm:mt-2  relative z-10"> 
        <div className="text-center p-4">
          <img src={logo} alt="Logo" className="m-auto w-[100px]" />
        </div>

        <h1 className='font-[800] text-[22px] sm:text-[35px] text-center mt-2'>Join us today! Get special <br/>benefits and stay up-to-date.</h1>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-5 mt-3'>
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

          <br />

          <div className='w-full flex items-center justify-center gap-3'>
            <span className='w-[100px] h-[1px] bg-[rgba(236,236,236,0.5)] flex items-center justify-center '></span>
            <span className='text-[10px] sm:text-[14px] text-[rgba(236,236,236,0.95)]'>Or, Sign in with your email</span>
            <span className='w-[100px] h-[1px] bg-[rgba(236,236,236,0.5)] flex items-center justify-center '></span>
          </div>


          <form className='w-full px-8 mt-3'>
            <div className='form-group mb-2 w-full'>
                <h4 className='text-white'>Full Name</h4>
                <input 
                   type="text"  
                   className='w-full bg-white text-black h-[45px] px-3 border-2 border-[rgba(0,0,0,0,2)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none'
                />
            </div>
            <div className='form-group mb-2 w-full'>
                <h4 className='text-white'>Email</h4>
                <input 
                   type="email"  
                   className='w-full bg-white text-black h-[45px] px-3 border-2 border-[rgba(0,0,0,0,2)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none'
                />
            </div>
            <div className='form-group mb-2 w-full'>
                <h4 className='text-white'>Password</h4>
                <div className='w-full relative'>
                  <input 
                    type={isShowPassword === true ? 'text' : 'password'} 
                    className='w-full bg-white text-black  h-[45px] px-3 border-2 border-[rgba(0,0,0,0,2)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none'
                  />
                  <Button onClick={()=>setIsShowPassword(!isShowPassword)} className='!w-[30px] !min-w-[30px] h-[30px] !absolute !top-[8px] !right-[10px] !rounded-full !text-black'>
                    {
                      isShowPassword === true ? (<FaEyeSlash  />) :( <FaEye /> )
                    }
                  </Button>
                </div>
            </div>
            <div className='form-group mb-4 w-full flex items-center justify-between'>
               <FormControlLabel 
                 control={<Checkbox size='small' sx={{ color: 'white', '&.Mui-checked': {color: 'white'}}} defaultChecked />} 
                 label={<Typography sx={{ fontSize: '13px', color: 'white' }}>By signing up you have agreed to our <span className='font-[800] text-[14px]'>Terms</span> & <span className='font-[800]  text-[14px]'>Privacy Policy</span></Typography>} />
            </div>
            <div className='form-group mb-4 w-full flex items-center justify-between'>
              <span className='text-white text-[12px]'>Already have an account </span>
               <Link className='text-[var(--primary)] font-[700] text-[14px] hover:text-gray-300 hover:underline' to='/login'>Login</Link>
            </div>
            <Button className='btn-lg w-full !capitalize'>Sign Up</Button>
          </form>

      </div>
     
    </section>
  );
}

export default SignUp;
