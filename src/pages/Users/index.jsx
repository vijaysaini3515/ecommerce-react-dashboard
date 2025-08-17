import React, { useContext } from 'react'

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';



import { MdModeEditOutline } from "react-icons/md";
import { HiEye } from "react-icons/hi";
import { LuTrash2 } from "react-icons/lu";
import SearchBox from '../../components/SearchBox';
import { MyContext } from '../../App';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { SlCalender } from "react-icons/sl";




const Users = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



  return (
    <>
        <div className="card p-3 bg-white shadow-md rounded-sm flex items-center justify-between">
            <h1 className='font-[700] text-[22px] text-gray-800'>Users</h1>
            <div className='w-[35%] ml-auto pr-2'>
              <SearchBox />
            </div>
        </div>

        <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
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
                                        className="px-2 py-3  text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                       User Image
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                        User Name
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3  text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                                      >
                                      Email
                                      </th>
                                      
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                       Phone
                                      </th>

                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                                      >
                                       CreateAt
                                      </th>

                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
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
                                          className="px-1 py-3"
                                        >
                                          <div className='flex items-center gap-2 w-[80px]'>
                                            <div className="img w-[45px] h-[45px] rounded-md over-hidden group">
                                              <Link className='' to='/product/9090'>
                                                <img className='w-full rounded-md transition-all group-hover:scale-105 ' src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp" alt="" />
                                              </Link>
                                            </div>
                                           
                                          </div>
                                        </th>

                                        <th
                                          className="px-1 py-3"
                                        >
                                           <span className='font-[500] text-[16px]'>Andersion</span>
                                        </th>

                                        <th
                                          className="px-1 py-3"
                                        >
                                         <span className='font-[500] text-[16px] flex items-center gap-1'><MdOutlineMarkEmailUnread /> Testgmail@info.com</span>
                                        </th>

                                        <th
                                          className="px-1 py-3"
                                        >
                                         <span className='font-[500] text-[16px] flex items-center gap-1'><MdPhoneEnabled /> 91+ 9823749171</span>
                                           
                                        </th>

                                        <th
                                          className="px-1 py-3"
                                        >
                                         <span className='font-[500] text-[16px] flex items-center gap-1'><SlCalender /> 24-5-2025</span>
                                           
                                        </th>

                                       

                                        <th
                                          className="px-1 py-3"
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

export default Users;