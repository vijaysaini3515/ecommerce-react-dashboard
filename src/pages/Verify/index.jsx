import React, { useRef, useState } from 'react';
// import './login.scss'
import whiteBgImg from '../../assets/images/LoginImg.webp';
import logo from '../../assets/images/shield.png';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { BiLogInCircle } from "react-icons/bi";
import { PiUserCircleDashed } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Verify = () => {

  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) inputRefs.current[index - 1].focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('Text').slice(0, 6).split('');
    const newOtp = [...otp];

    pasteData.forEach((char, idx) => {
      if (!/^\d$/.test(char)) return;
      if (idx < 6) {
        newOtp[idx] = char;
        inputRefs.current[idx].value = char;
      }
    });

    setOtp(newOtp);
    const nextEmpty = newOtp.findIndex(d => d === '');
    if (nextEmpty !== -1) inputRefs.current[nextEmpty].focus();
  };

  const handleSubmit = () => {
    const fullOtp = otp.join('');
    if (fullOtp.length === 6) {
      console.log('Submitting OTP:', fullOtp);
      // Add your logic here (API call, navigation, etc.)
    } else {
      alert('Please enter all 6 digits');
    }
  };


  return (
    <section className="relative h-[100vh] flex items-center justify-center">
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
      <div className="loginBox card w-[500px]  mx-auto   relative z-10">
        <div className="text-center p-4">
          <img src={logo} alt="Logo" className="m-auto w-[100px]" />
        </div>

        <h1 className="font-[800] text-[35px] text-center mt-4">
          Welcome Back <br /> Please Verify Your Account
        </h1>

        <div className=" flex flex-col items-center justify-center  p-4">
          <div className="rounded-lg shadow-md w-full max-w-md">
            <p className="!mt-0 !mb-2 text-center">
              OTP send to{" "}
              <span className="text-[rgba(225,225,225,0.6)] font-bold">
                text@gmail.com
              </span>
            </p>

            <div
              className="flex justify-center space-x-3 mb-6"
              onPaste={handlePaste}
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 text-center text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={otp[index]}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Verify
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Verify;
