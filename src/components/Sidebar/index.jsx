import Button from '@mui/material/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaImages } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { TbBrandProducthunt } from "react-icons/tb";
import { TbCategory2 } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

const Sidebar = () => {
  return (
   <div className="sidebar py-2 px-4 h-full w-[18%] fixed top-0 left-0 bg-[#fff] border border-[rgba(0,0,0,0.1)]">

    <div className="p-2 w-full">
      <Link to='/'>
         <img className='w-[120px]' src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" alt="" />
      </Link>
    </div>

    <ul className='mt-4'>
      <li>
        <Button className='w-full !py-2 !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <TbLayoutDashboardFilled  className="text-[18px]" />
          <span>Dashboard</span>
        </Button>
      </li>
      
      <li>
        <Button className='w-full  !py-2 !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <FaImages  className="text-[18px]" />
          <span>Home Slides</span>
          <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
            <FaAngleDown />
          </span>
        </Button>
      </li>

      <li>
        <Button className='w-full !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <HiUsers  className="text-[18px]" />
          <span>Users</span>
        </Button>
      </li>

      <li>
        <Button className='w-full  !py-2 !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <TbBrandProducthunt  className="text-[18px]" />
          <span>Products</span>
          <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
            <FaAngleDown />
          </span>
        </Button>
      </li>

      <li>
        <Button className='w-full  !py-2 !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <TbCategory2  className="text-[18px]" />
          <span>Category</span>
          <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
            <FaAngleDown />
          </span>
        </Button>
      </li>

      <li>
        <Button className='w-full  !py-2 !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <IoBagCheckOutline  className="text-[18px]" />
          <span>Orders</span>
        </Button>
      </li>

      <li>
        <Button className='w-full  !py-2 !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <IoMdLogOut  className="text-[18px]" />
          <span>Logout</span>
        </Button>
      </li>
      

    </ul>

   </div>
  )
}

export default Sidebar;