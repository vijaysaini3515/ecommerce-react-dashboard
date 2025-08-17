import React from 'react';
import './login.scss'
import whiteBgImg from '../../assets/images/LoginImg.webp';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import { BiLogInCircle } from "react-icons/bi";
import { PiUserCircleDashed } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const ChangePassword = () => {

  
    const [isShowPassword,setIsShowPassword] = React.useState(false);
    const [isShowPassword2,setIsShowPassword2] = React.useState(false);



    function handleClickGoogle() {
        setLoadingGoogle(true);
    };

    function handleClickFacebook() {
        setLoadingFacebook(true);
    };


  return (
    <section className="relative">
      {" "}
      {/* Added relative positioning */}
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 w-full px-4 py-2 flex items-center justify-between">
        <Link>
          <img
            className="w-[120px]"
            src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
            alt="Logo"
          />
        </Link>
        <div className="flex items-center gap-4">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-4 flex items-center gap-2 !normal-case">
              <BiLogInCircle className="text-[18px]" /> LogIn
            </Button>
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-4 flex items-center gap-2 !normal-case">
              <PiUserCircleDashed className="text-[18px]" /> SignUp
            </Button>
          </NavLink>
        </div>
      </header>
      {/* Background Image */}
      <img
        className="w-full fixed top-0 left-0 right-0 z-0"
        src={whiteBgImg}
        alt="Background"
        style={{ objectFit: "cover", height: "100vh" }}
      />
      <div className="loginBox card w-[500px] h-[300px] mx-auto mt-5  relative z-10">
        <div className="text-center p-4">
          <img src={logo} alt="Logo" className="m-auto w-[100px]" />
        </div>

        <h1 className="font-[800] text-[35px] text-center mt-4">
          Welcome Back <br />
          Reset Your Password
        </h1>

        <form className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full"></div>
          <div className="form-group mb-4 w-full">
            <h4 className="text-white">New Password</h4>
            <div className="w-full relative">
              <input
                type={isShowPassword === true ? "text" : "password"}
                className="w-full bg-white text-black  h-[45px] px-3 border-2 border-[rgba(0,0,0,0,2)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none"
              />
              <Button
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="!w-[30px] !min-w-[30px] h-[30px] !absolute !top-[8px] !right-[10px] !rounded-full !text-black"
              >
                {isShowPassword === true ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </div>
          </div>

          <div className="form-group mb-4 w-full">
            <h4 className="text-white">Confirm Password</h4>
            <div className="w-full relative">
              <input
                type={isShowPassword2 === true ? "text" : "password"}
                className="w-full bg-white text-black  h-[45px] px-3 border-2 border-[rgba(0,0,0,0,2)] rounded-sm focus:border-[rgba(0,0,0,0.7)] focus:outline-none"
              />
              <Button
                onClick={() => setIsShowPassword2(!isShowPassword2)}
                className="!w-[30px] !min-w-[30px] h-[30px] !absolute !top-[8px] !right-[10px] !rounded-full !text-black"
              >
                {isShowPassword === true ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </div>
          </div>

          <Button className="btn-lg w-full !capitalize">Sign In</Button>
        </form>

      </div>
    </section>
  );
}

export default ChangePassword;
