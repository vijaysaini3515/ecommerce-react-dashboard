import React from "react";
import UploadBox from "../UploadBox";
import Button from "@mui/material/Button";

import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AddCategory = () => {
  return (
    <section className="">
      <div className="cart  bg-[#f1f1f1] shadow-sm w-full py-3 px-2 ">
        <h1 className="text-[22px] font-[700] text-gray-800">Add Category</h1>
      </div>

      <form className="container py-5 ">

        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="mb-1 text-[18px] font-[600]">Product Name</h3>
            <input
              type="text"
              className="bg-white w-full h-[40px] text-sm rounded-sm p-2  border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] focus:outline-none"
            />
          </div>
        </div>
        <br/>
        <div className="col w-full p-5 px-0">
          <h3 className="font-[700] text-[18px] mb-2">Category's images</h3>
          <div className="grid grid-cols-7 gap-3 ">
            <div className="uploadBoxWrapper relative">
              <span className="absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700">
                <IoClose className="text-[#FFF] fon-[700]" />
              </span>
              <div className="uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 ">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt="image"
                  src={
                    "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp"
                  }
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>

            <div className="uploadBoxWrapper relative">
              <span className="absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700">
                <IoClose className="text-[#FFF] fon-[700]" />
              </span>
              <div className="uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 ">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt="image"
                  src={
                    "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp"
                  }
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>

            <div className="uploadBoxWrapper relative">
              <span className="absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700">
                <IoClose className="text-[#FFF] fon-[700]" />
              </span>
              <div className="uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 ">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt="image"
                  src={
                    "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp"
                  }
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>

            <div className="uploadBoxWrapper relative">
              <span className="absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700">
                <IoClose className="text-[#FFF] fon-[700]" />
              </span>
              <div className="uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 ">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt="image"
                  src={
                    "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp"
                  }
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>

            <div className="uploadBoxWrapper relative">
              <span className="absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700">
                <IoClose className="text-[#FFF] fon-[700]" />
              </span>
              <div className="uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 ">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt="image"
                  src={
                    "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp"
                  }
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>

            <div className="uploadBoxWrapper relative">
              <span className="absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700">
                <IoClose className="text-[#FFF] fon-[700]" />
              </span>
              <div className="uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 ">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt="image"
                  src={
                    "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp"
                  }
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>

            <UploadBox multiple={true} />
          </div>
        </div>

        <div className=" container ">
          <Button className="btn-blue btn-lg !capitalize w-full flex items-center gap-2">
            <FaCloudUploadAlt className="w-[25px] text-white" /> Publish & view
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddCategory;
