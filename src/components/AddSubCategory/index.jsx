import React from "react";
import Button from "@mui/material/Button";

import { FaCloudUploadAlt } from "react-icons/fa";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddSubCategory = () => {
  const [productCategory, setProductCategory] = React.useState('');

  const handleChangeProductCategory = (event) => {
    setProductCategory(event.target.value);
  };

  return (
    <section className="">
      <div className="cart  bg-[#f1f1f1] shadow-sm w-full py-3 px-2 ">
        <h1 className="text-[22px] font-[700] text-gray-800">
          Add Sub Category
        </h1>
      </div>

      <form className="container py-5 ">
        <div className="grid grid-cols-3 gap-5 mb-3">
          <div className="col">
            <h3 className="mb-1 text-[14px] font-[500]">Product Category</h3>
            <Select
              size="small"
              value={productCategory}
              onChange={handleChangeProductCategory}
              className="w-full bg-white"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>{" "}
              </MenuItem>
              <MenuItem value={10}>Beauty</MenuItem>
              <MenuItem value={20}>Fashion</MenuItem>
              <MenuItem value={30}>Wellness</MenuItem>
            </Select>
          </div>

          <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Sub Category Name</h3>
                <input type="text" className='bg-white w-full h-[40px] text-sm rounded-sm p-2  border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] focus:outline-none' />
              </div>

        </div>
        <br />

        <div className=" container ">
          <Button className="btn-blue btn-lg !capitalize w-full flex items-center gap-2">
            <FaCloudUploadAlt className="w-[25px] text-white" /> Publish & view
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddSubCategory;
