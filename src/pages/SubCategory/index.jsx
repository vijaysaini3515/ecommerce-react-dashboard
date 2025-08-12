import React, { useContext } from "react";
import banner1Img from '../../assets/images/footwear.png'
import banner2Img from '../../assets/images/jewelry.png'
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Chip from '@mui/material/Chip';
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";

import { MdModeEditOutline } from "react-icons/md";
import { HiEye } from "react-icons/hi";
import { LuTrash2 } from "react-icons/lu";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { MyContext } from "../../App";

const SubCategory = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const context = useContext(MyContext);



  const handleChangeCategoryFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  return (
    <>
      <div className="card p-3   shadow-md sm:rounded-lg bg-white flex items-center justify-between">
        <div>
          <h3 className="text-[18px] font-[600] ">Sub Category List</h3>
        </div>

        <div>
          <div className="col  flex items-center gap-3 ">
            <Button className="btn btn-sm !bg-green-600 !text-white flex items-center gap-1 !normal-case">
              <AiOutlineCloudDownload className="text-[18px] font-[800] " />{" "}
              Export
            </Button>
            <Button
              onClick={() =>
                context.setIsOpenPanel({
                  open: true,
                  model: "Add New Sub Category",
                })
              }
              className="btn-blue btn-sm  !text-white  flex items-center gap-1 !normal-case"
            >
              <FaPlus className="text-[14px] font-[600] " /> Add New sub
              Category
            </Button>
          </div>
        </div>
      </div>

      {/*  table */}
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="col1 w-full lg:w-[100%] ">
          <div className="bg-white shadow-md rounded-md py-2">
            <div className="px-3 border-b border-[#ccc]">
              <div className="flex flex-col mt-5">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full  divide-gray-200">
                        <thead>
                          <tr className="border-b border-[rgba(0,0,0,0.8)]">
                            <th
                              scope="col"
                              className="px-2 w-[50px]  py-3 text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              <div className="w-[60px]">
                                <Checkbox {...label} size="small" />
                              </div>
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3  w-[150px] text-[14px]  text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Category Image
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3 w-[100px]  text-[14px]  text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Category Name
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3 w-[400px] text-[14px]  text-center  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Sub Category Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-[14px] text-start  whitespace-nowrap text-xs font-medium text-gray-500 uppercase"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="odd:bg-white border-b border-[rgba(0,0,0,0.3)]">
                            <th className="px-2 py-3 text-start">
                              <div className="w-[50px]">
                                <Checkbox {...label} size="small" />
                              </div>
                            </th>

                            <th scope="col" className="px-2 py-3  w-[150px]">
                              <div className="flex items-center gap-2 w-[200px]">
                                <div className="img w-[60px] h-[65px] rounded-md over-hidden group">
                                  <Link className="" to="/product/9090">
                                    <img
                                      className="w-full rounded-md transition-all group-hover:scale-105 "
                                      src={banner1Img}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                            </th>

                            <th scope="col" className="px-2 py-3 w-[100px]">
                               <span className="font-[500] text-[14px] bg-indigo-100 p-1 px-2 rounded-md text-[rgba(0,0,0,0.6)]">Fashion</span>
                            </th>


                            <th scope="col" className="px-2 py-3 w-[400px] flex items-center flex-wrap justify-center gap-3">
                              <Chip label="Man" />
                              <Chip label="Woman" />
                              <Chip label="Kids" />
                              <Chip label="Man" />
                              <Chip label="Woman" />
                              <Chip label="Kids" />
                              <Chip label="Man" />
                              <Chip label="Woman" />
                              <Chip label="Kids" />
                            </th>

                            <th className="px-6 py-3">
                              <div className="flex items-center gap-2">
                                <Tooltip title="Edit Product" placement="top">
                                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#e8e8e8d2]">
                                    <MdModeEditOutline className="text-[rgba(0,0,0,0.7)] text-[20px] hover:text-[#3872fa]" />
                                  </Button>
                                </Tooltip>
                                <Tooltip title="View Product" placement="top">
                                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#e8e8e8d2]">
                                    <HiEye className="text-[rgba(0,0,0,0.7)] text-[20px] hover:text-[#3872fa]" />
                                  </Button>
                                </Tooltip>
                                <Tooltip title="Delete Product" placement="top">
                                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#e8e8e8d2]">
                                    <LuTrash2 className="text-[rgba(0,0,0,0.7)] text-[20px] hover:text-[#3872fa]" />
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
  );
};

export default SubCategory;
