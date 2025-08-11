import React from 'react';

import { FaImages } from "react-icons/fa6";

const UploadBox = ({multiple}) => {
  return (
    <div className='uploadBox p-3 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 flex flex-col items-center justify-center cursor-pointer relative'>
        <FaImages className='text-[40px] opacity-35'/>
        <h3 className='text-[14px] text-[rgba(0,0,0,0.7)] opacity-60'>Upload Image</h3>
        <input type="file" multiple={multiple !== undefined ? multiple : false} className=' opacity-0 absolute top-0 left-0 z-50 w-full h-full'  />
    </div>
  )
}

export default UploadBox;