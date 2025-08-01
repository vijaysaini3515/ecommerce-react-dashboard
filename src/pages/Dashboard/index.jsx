import React, { useState } from 'react'
import DashboardCardBoxes from '../../components/DashboardCardBoxes';
import homeImg from '../../assets/images/shop-illustration.webp'
import RowImg from '../../assets/images/grape2.jpg'

import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Badge from '../../components/Badge';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import ProgressBar from '../../components/ProgressBar';
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { HiPlusSm } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { MdModeEditOutline } from "react-icons/md";
import { HiEye } from "react-icons/hi";
import { LuTrash2 } from "react-icons/lu";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import LineChart1 from '../../components/Charts/LineChart1';

const Dashboard = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const[isOpenOrderProduct,setOpenOrderProduct] = useState(null);

  const [categoryFilter, setCategoryFilter] = React.useState('');


  const isShowOrderProducts =(index)=>{
   if(isOpenOrderProduct === index){
    setOpenOrderProduct(null)
   }else{
    setOpenOrderProduct(index)
   }
  }

  const handleChangeCategoryFilter = (event) => {
    setCategoryFilter(event.target.value);
  };




  return (
    <>

      <div className="w-full bg-white py-2 px-5 mb-5 rounded-sm border border-[rgba(0,0,0,0.1)] flex items-center justify-between gap-8">
        <div className="info">
          <h1 className='mb-3 text-[35px] font-bold leading-10'>Good Morning, <br /> Cameron</h1>
          <p className='text-[rgba(0,0,0,0.6)] mb-2'>Here’s What happening on your store today. See the statistics at once.</p>
          <Button className='btn-blue !capitalize'><HiPlusSm/>Add Product</Button>
        </div>
        <img className='w-[250px] hover:scale-105 transition-all' src={homeImg} alt="" />
      </div>

      <DashboardCardBoxes />

      <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between px-5 py-5'>
            <h3 className='text-[18px] font-[600]'>Recent Orders</h3>
          </div>

          <div className="col1 w-full lg:w-[100%] ">
                   <div className="bg-white shadow-md rounded-md py-2">
                     <div className="px-3 border-b border-[#ccc]">
                        {/* this table is getting form preline website */}
                        <div className="flex flex-col mt-5">
                          <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                              <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Order Id
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Payment Id
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Name
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Phone Number
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Address
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                        PinCode
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Total Amount
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Email
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        User Id
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3  whitespace-nowrap text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Order Status
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Date
                                      </th>
                                      
                                    </tr>
                                  </thead>
                                  <tbody>
{/* first row */}
                                    <tr className="odd:bg-white border-b border-[rgba(0,0,0,0.8)]">
                                      <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                        <Button onClick={()=>isShowOrderProducts(0)} className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'>
                                           {
                                            isOpenOrderProduct === 0 ? <FaAngleUp /> :<FaAngleDown />
                                           } 
                                        </Button>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)] font-[600]'>1cnm81u2y984y19823ry</span>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)] font-[600]'>PAY_1u2y984y198</span>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          John Brown
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          9090909090
                                        </td>
                                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                          <span className='block w-[300px]'>Flat 10, Green Heights Apartments, 2nd Cross, MG Road, Ashok Nagar, Bengaluru, Karnataka 560001, India</span>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          332002
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          $300
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          Test@gmail.com
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)] font-[600]'>4nc9ufw984893974r30</span>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <Badge status="delivered" />
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          20-4-2026
                                        </td>
                                    </tr>

                                        {
                                          isOpenOrderProduct === 0 && (
                                            <tr>
                                              <td className=' pl-20' colSpan={6}>
                                              <div className="-m-1.5 overflow-x-auto">
                                                  <div className="p-1.5 min-w-full inline-block align-middle">
                                                    <div className="overflow-hidden">
                                                      <table className="min-w-full divide-y divide-gray-200">
                                                        <thead>
                                                          <tr>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Product Id
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Product Title
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Image
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Quantity
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Price
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Sub Total
                                                            </th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr className="odd:bg-white ">
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <span className="text-[var(--primary)] font-[600]">
                                                                1cnm81u2y984y19823ry
                                                              </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              Orange with lemon juice
                                                            </td>
                                                            <td className="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <img
                                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                                src={RowImg}
                                                                alt=""
                                                              />
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              1
                                                            </td>
                                                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                                              $300
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              $320
                                                            </td>
                                                          </tr>
                                                          <tr className="odd:bg-white ">
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <span className="text-[var(--primary)] font-[600]">
                                                                1cnm81u2y984y19823ry
                                                              </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              Orange with lemon juice
                                                            </td>
                                                            <td className="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <img
                                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                                src={RowImg}
                                                                alt=""
                                                              />
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              1
                                                            </td>
                                                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                                              $300
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              $320
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                  </div>
                                              </div>
                                              </td>
                                            </tr>
                                          )
                                        }

                                    
{/* second row */}
                                         
                                    <tr className="odd:bg-white border-b border-[rgba(0,0,0,0.8)]">
                                      <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                        <Button onClick={()=>isShowOrderProducts(1)} className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'>
                                           {
                                            isOpenOrderProduct === 1 ? <FaAngleUp /> :<FaAngleDown />
                                           } 
                                        </Button>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)] font-[600]'>1cnm81u2y984y19823ry</span>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)] font-[600]'>PAY_1u2y984y198</span>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          John Brown
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          9090909090
                                        </td>
                                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                          <span className='block w-[300px]'>Flat 10, Green Heights Apartments, 2nd Cross, MG Road, Ashok Nagar, Bengaluru, Karnataka 560001, India</span>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          332002
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          $300
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          Test@gmail.com
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <span className='text-[var(--primary)] font-[600]'>4nc9ufw984893974r30</span>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          <Badge status="delivered" />
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                          20-4-2026
                                        </td>
                                    </tr>

                                        {
                                          isOpenOrderProduct === 1 && (
                                            <tr>
                                              <td className=' pl-20' colSpan={6}>
                                              <div className="-m-1.5 overflow-x-auto">
                                                  <div className="p-1.5 min-w-full inline-block align-middle">
                                                    <div className="overflow-hidden">
                                                      <table className="min-w-full divide-y divide-gray-200">
                                                        <thead>
                                                          <tr>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Product Id
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Product Title
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Image
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Quantity
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Price
                                                            </th>
                                                            <th
                                                              scope="col"
                                                              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                                            >
                                                              Sub Total
                                                            </th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr className="odd:bg-white ">
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <span className="text-[var(--primary)] font-[600]">
                                                                1cnm81u2y984y19823ry
                                                              </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              Orange with lemon juice
                                                            </td>
                                                            <td className="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <img
                                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                                src={RowImg}
                                                                alt=""
                                                              />
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              1
                                                            </td>
                                                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                                              $300
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              $320
                                                            </td>
                                                          </tr>
                                                          <tr className="odd:bg-white ">
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <span className="text-[var(--primary)] font-[600]">
                                                                1cnm81u2y984y19823ry
                                                              </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              Orange with lemon juice
                                                            </td>
                                                            <td className="px-6 py-4 flex items-center justify-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              <img
                                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                                src={RowImg}
                                                                alt=""
                                                              />
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              1
                                                            </td>
                                                            <td className="px-6 py-4 text-center text-sm font-medium text-gray-800">
                                                              $300
                                                            </td>
                                                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800">
                                                              $320
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                  </div>
                                              </div>
                                              </td>
                                            </tr>
                                          )
                                        }

                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
          </div>

      </div>


{/* second table */}
      <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between px-5 py-5'>
            <h3 className='text-[18px] font-[600] '>Products</h3>
          </div>

          <div className="flex items-center justify-between w-full pl-5 mb-2">

            <div className='col w-[20%]'>
              <h4 className='font-[600] text-[18px]'>Category By</h4>
                <Select
                  className='w-full mt-2'
                  size='small'
                  id="demo-simple-select-helper"
                  value={categoryFilter}
                  onChange={handleChangeCategoryFilter}
                >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Man</MenuItem>
                    <MenuItem value={20}>Woman</MenuItem>
                    <MenuItem value={30}>Kids</MenuItem>
                </Select>
            </div>

            <div className="col w-[26%] ml-auto flex items-center gap-3 ">
                 <Button className='btn btn-sm !bg-green-600 !text-white flex items-center gap-1 !normal-case'> <AiOutlineCloudDownload className='text-[18px] font-[800] ' /> Export</Button>                       
                 <Button className='btn-blue btn-sm  !text-white  flex items-center gap-1 !normal-case'><FaPlus className='text-[14px] font-[600] '/> Add Product</Button>                       
            </div>

          </div>

          <div className="col1 w-full lg:w-[100%] ">
                   <div className="bg-white shadow-md rounded-md py-2">
                     <div className="px-3 border-b border-[#ccc]">
                        <div className="flex flex-col mt-5">
                          <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                              <div className="overflow-hidden">
                                
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th
                                        scope="col"
                                        className="px-2 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                       <div className='w-[60px]'>
                                         <Checkbox {...label} size='small' />
                                       </div>
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-2 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                       Product
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Category
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                       subCategory
                                      </th>
                                      
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                       Price
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Rating
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        Action
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>

                                    <tr className="odd:bg-white border-b border-[rgba(0,0,0,0.8)]">
                                      <th
                                          className="px-2 py-3 text-start"
                                        >
                                          <div className='w-[60px]'>
                                            <Checkbox {...label} size='small' />
                                          </div>
                                        </th>

                                        <th
                                          scope="col"
                                          className="px-2 py-3"
                                        >
                                          <div className='flex items-center gap-2 w-[200px]'>
                                            <div className="img w-[65px] h-[65px] rounded-md over-hidden group">
                                              <Link className='' to='/product/9090'>
                                                <img className='w-full rounded-md transition-all group-hover:scale-105 ' src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp" alt="" />
                                              </Link>
                                            </div>
                                            <div className="info w-[75%]">
                                               <h3 className='text-[12px] font-[600] leading-4 hover:text-[var(--primary)]'>
                                                 <Link className='' to='/product/9090'>Tasty Metal Shirt</Link>
                                               </h3>
                                              <span className='text-[10x]'>Books</span>
                                            </div>
                                          </div>
                                        </th>

                                        <th
                                          className="px-6 py-3"
                                        >
                                         Electronic
                                        </th>

                                        <th
                                          className="px-6 py-3"
                                        >
                                         Woman
                                        </th>

                                        <th
                                          className="px-6 py-3"
                                        >
                                           <div className="flex flex-col items-center gap-1 text-gray-500">
                                            <span className='oldPrice text-[12px] font-[500] line-through'>$58.00</span>
                                            <span className='price text-[15px] font-[600] text-[var(--primary)]'>$52.90</span>
                                            </div>
                                        </th>

                                        <th
                                          className="px-2 py-3"
                                        >
                                         <p>234 <span>Seal</span></p>
                                         <ProgressBar value={40} type="warning" />
                                        </th>

                                        <th
                                          className="px-6 py-3"
                                        >
                                          <div className='flex items-center gap-2'>
                                            <Tooltip title="Edit Product" placement="top">
                                              <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#e8e8e8d2]'>
                                                <MdModeEditOutline className='text-[rgba(0,0,0,0.7)] text-[20px] hover:text-[#3872fa]' />
                                              </Button>
                                            </Tooltip>
                                            <Tooltip title="View Product" placement="top">
                                              <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#e8e8e8d2]'>
                                                <HiEye className='text-[rgba(0,0,0,0.7)] text-[20px] hover:text-[#3872fa]' />
                                              </Button>
                                            </Tooltip>
                                            <Tooltip title="Delete Product" placement="top">
                                              <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#e8e8e8d2]'>
                                                <LuTrash2 className='text-[rgba(0,0,0,0.7)] text-[20px] hover:text-[#3872fa]' />
                                              </Button>
                                            </Tooltip>
                                          </div>
                                        </th>


                                        
                                    </tr>

                                    <tr className="odd:bg-white border-b border-[rgba(0,0,0,0.8)]">
                                      <th
                                          className="px-2 py-3 text-start"
                                        >
                                          <div className='w-[60px]'>
                                            <Checkbox {...label} size='small' />
                                          </div>
                                        </th>

                                        <th
                                          scope="col"
                                          className="px-2 py-3"
                                        >
                                          <div className='flex items-center gap-2 w-[200px]'>
                                            <div className="img w-[65px] h-[65px] rounded-md over-hidden group">
                                              <Link className='' to='/product/9090'>
                                                <img className='w-full rounded-md transition-all group-hover:scale-105 ' src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp" alt="" />
                                              </Link>
                                            </div>
                                            <div className="info w-[75%]">
                                               <h3 className='text-[12px] font-[600] leading-4 hover:text-[var(--primary)]'>
                                                 <Link className='' to='/product/9090'>Tasty Metal Shirt</Link>
                                               </h3>
                                              <span className='text-[10x]'>Books</span>
                                            </div>
                                          </div>
                                        </th>

                                        <th
                                          className="px-6 py-3"
                                        >
                                         Electronic
                                        </th>

                                        <th
                                          className="px-6 py-3"
                                        >
                                         Woman
                                        </th>

                                        <th
                                          className="px-6 py-3"
                                        >
                                           <div className="flex flex-col items-center gap-1 text-gray-500">
                                            <span className='oldPrice text-[12px] font-[500] line-through'>$58.00</span>
                                            <span className='price text-[15px] font-[600] text-[var(--primary)]'>$52.90</span>
                                            </div>
                                        </th>

                                        <th
                                          className="px-2 py-3"
                                        >
                                         <p>234 <span>Seal</span></p>
                                         <ProgressBar value={40} type="warning" />
                                        </th>

                                        <th
                                          className="px-6 py-3"
                                        >
                                          <div className='flex items-center gap-2'>
                                            <Tooltip title="Edit Product" placement="top">
                                              <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#e8e8e8d2]'>
                                                <MdModeEditOutline className='text-[rgba(0,0,0,0.7)] text-[20px] hover:text-[#3872fa]' />
                                              </Button>
                                            </Tooltip>
                                            <Tooltip title="View Product" placement="top">
                                              <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#e8e8e8d2]'>
                                                <HiEye className='text-[rgba(0,0,0,0.7)] text-[20px] hover:text-[#3872fa]' />
                                              </Button>
                                            </Tooltip>
                                            <Tooltip title="Delete Product" placement="top">
                                              <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#e8e8e8d2]'>
                                                <LuTrash2 className='text-[rgba(0,0,0,0.7)] text-[20px] hover:text-[#3872fa]' />
                                              </Button>
                                            </Tooltip>
                                          </div>
                                        </th>

                                    </tr>
                                    

                                    
                                         
                                    

                                        

                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>

                     <div className="flex justify-end items-center py-5">
                        <Pagination count={10} color="primary" />
                     </div>

                  </div>

          </div>

      </div>

      <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
          <div className='px-5 py-5'>
            <h3 className='text-[18px] font-[600] mb-5'>Total User and Seals</h3>
          </div>
          <div className='p-2'>
            <LineChart1 />
          </div>
      </div>
          
            
          

    </>
  )
}

export default Dashboard