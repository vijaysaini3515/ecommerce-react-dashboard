import React, { useContext } from 'react'

import Button from '@mui/material/Button';
import Badge from '../../components/Badge';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import ProgressBar from '../../components/ProgressBar';
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


import { FaPlus } from "react-icons/fa6";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { HiEye } from "react-icons/hi";
import { LuTrash2 } from "react-icons/lu";
import SearchBox from '../../components/SearchBox';
import { MyContext } from '../../App';




const Products = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [categoryFilter, setCategoryFilter] = React.useState('');
    const context = useContext(MyContext)

    const handleChangeCategoryFilter = (event) => {
        setCategoryFilter(event.target.value);
      };



  return (
    <>
        <div className="card p-3 bg-white shadow-md rounded-sm flex items-center justify-between">
            <h1 className='font-[700] text-[22px] text-gray-800'>Products</h1>
            <div className="col w-[26%] ml-auto flex items-center gap-3 ">
                 <Button className='btn btn-sm !bg-green-600 !text-white flex items-center gap-1 !normal-case'> <AiOutlineCloudDownload className='text-[18px] font-[800] ' /> Export</Button>                       
                 <Button onClick={()=>context.setIsOpenPanel({open:true,model:'Add Product'})} className='btn-blue btn-sm  !text-white  flex items-center gap-1 !normal-case'><FaPlus className='text-[14px] font-[600] '/> Add Product</Button>                       
            </div>
        </div>

        <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
        

          <div className="flex items-center justify-between w-full pl-5 mb-2">

            <div className='col w-[20%] mt-2'>
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

            <div className='w-[20%] ml-auto pr-2'>
             <SearchBox />
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
   </>
  )
}

export default Products;