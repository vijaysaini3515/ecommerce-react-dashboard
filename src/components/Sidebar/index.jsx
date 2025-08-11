import Button from '@mui/material/Button';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaImages } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { TbBrandProducthunt } from "react-icons/tb";
import { TbCategory2 } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import {Collapse} from 'react-collapse';
import { MyContext } from '../../App';

const Sidebar = () => {
  const context = useContext(MyContext)
  const[subMenuIndex,setSubMenuIndex] = useState(null);

  const isOpenSubMenu = (index)=>{
    if(subMenuIndex === index){
      setSubMenuIndex(null)
    }else{
      setSubMenuIndex(index)
    }
  }



  return (
   <div className={`sidebar py-2 px-4 h-full ${context.isSideBarOpen === true ? 'w-[18%]': 'w-[0px]'} fixed top-0 left-0 bg-[#fff] border border-[rgba(0,0,0,0.1)]`}>

    <div className="p-2 w-full">
      <Link to='/'>
         <img className='w-[120px]' src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" alt="" />
      </Link>
    </div>

    <ul className='mt-4'>
      <li>
        <Link to='/'>
          <Button className='w-full !py-2 hover:!bg-[#f1f1f1] !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
            <TbLayoutDashboardFilled  className="text-[18px]" />
            <span>Dashboard</span>
          </Button>
        </Link>
      </li>
      
      <li>
        <Button onClick={()=>isOpenSubMenu(1)} className='w-full  !py-2 hover:!bg-[#f1f1f1] !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <FaImages  className="text-[18px]" />
          <span>Home Slides</span>
          <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
            <FaAngleDown className={`transition-all ${subMenuIndex === 1 ? 'rotate-180':''}`} />
          </span>
        </Button>

        <Collapse isOpened={subMenuIndex === 1 ? true : false}>
          <ul className='w-full'>
            <li className='w-full'>
              <Button className='!w-full !pl-5 !text-[rgba(0,0,0,0.7)] !text-[13px] !font-[400] !capitalize !justify-start flex items-center gap-2'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span> Home Banner List</Button>
            </li>
            <li className='w-full'>
              <Button className='!w-full !pl-5 !text-[rgba(0,0,0,0.7)] !text-[13px] !font-[400] !capitalize !justify-start flex items-center gap-2'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add Home Banner slide</Button>
            </li>
          </ul>
        </Collapse>        

      </li>

      <li>
        <Link to='/users'>
          <Button className='w-full hover:!bg-[#f1f1f1] !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
            <HiUsers  className="text-[18px]" />
            <span>Users</span>
          </Button>
        </Link>  
      </li>

      <li>
        <Button onClick={()=>isOpenSubMenu(2)} className='w-full  !py-2 hover:!bg-[#f1f1f1] !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <TbBrandProducthunt  className="text-[18px]" />
          <span>Products</span>
          <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
            <FaAngleDown className={`transition-all ${subMenuIndex === 2 ?'rotate-180':''}`} />
          </span>
        </Button>

        <Collapse isOpened={subMenuIndex === 2 ? true : false}>
          <ul className='w-full'>
            <Link to='/products'>
              <li className='w-full'>
                <Button className='!w-full !pl-5 !text-[rgba(0,0,0,0.7)] !text-[13px] !font-[400] !capitalize !justify-start flex items-center gap-2'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Product List</Button>
              </li>
            </Link>
              <li className='w-full'>
                <Button onClick={()=>context.setIsOpenPanel({open:true,model:'Add Product'})} className='!w-full !pl-5 !text-[rgba(0,0,0,0.7)] !text-[13px] !font-[400] !capitalize !justify-start flex items-center gap-2'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Upload Product</Button>
              </li>
          </ul>
        </Collapse>

      </li>

      <li>
        <Button onClick={()=>isOpenSubMenu(3)} className='w-full  !py-2 hover:!bg-[#f1f1f1] !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <TbCategory2  className="text-[18px]" />
          <span>Category</span>
          <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
            <FaAngleDown className={`transition-all ${subMenuIndex === 3 ? 'rotate-180': ''}`} />
          </span>
        </Button>

        <Collapse isOpened={subMenuIndex === 3 ? true : false}>
          <ul className='w-full'>
            <Link to="/categories">
              <li className='w-full'>
                <Button className='!w-full !pl-5 !text-[rgba(0,0,0,0.7)] !text-[13px] !font-[400] !capitalize !justify-start flex items-center gap-2'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Category List</Button>
              </li>
            </Link>
            <Link to="/category/add">
              <li className='w-full'>
                <Button className='!w-full !pl-5 !text-[rgba(0,0,0,0.7)] !text-[13px] !font-[400] !capitalize !justify-start flex items-center gap-2'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add a category</Button>
              </li>
            </Link>
            <Link to="/category/subCat">
              <li className='w-full'>
                <Button className='!w-full !pl-5 !text-[rgba(0,0,0,0.7)] !text-[13px] !font-[400] !capitalize !justify-start flex items-center gap-2'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Sub-category List</Button>
              </li>
            </Link>
            <Link to="/category/subCat/add">
            <li className='w-full'>
              <Button className='!w-full !pl-5 !text-[rgba(0,0,0,0.7)] !text-[13px] !font-[400] !capitalize !justify-start flex items-center gap-2'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add a Sub-category</Button>
            </li>
            </Link>
          </ul>
        </Collapse>

      </li>

      <li>
        <Link to='orders'>
          <Button className='w-full  !py-2 hover:!bg-[#f1f1f1] !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
            <IoBagCheckOutline  className="text-[18px]" />
            <span>Orders</span>
          </Button>
        </Link>
      </li>

      <li>
        <Button className='w-full  !py-2 hover:!bg-[#f1f1f1] !capitalize !justify-start !text-[14px] !font-[18px] !text-[rgba(0,0,0,0.8)] flex items-center gap-3'>
          <IoMdLogOut  className="text-[18px]" />
          <span>Logout</span>
        </Button>
      </li>
      

    </ul>

   </div>
  )
}

export default Sidebar;