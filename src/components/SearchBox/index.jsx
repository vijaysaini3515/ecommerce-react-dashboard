import React from 'react';

import { GrSearch } from "react-icons/gr";

const SearchBox = () => {
  return (
    <div className='bg-[#f1f1f1] h-full w-full rounded-sm relative overflow-hidden'>
        <GrSearch className='absolute left-2 top-[13px] z-50 pointer-events-none opacity-70' />
        <input type="text" placeholder='search hear ...' className='bg-[#f1f1f1] h-[40px] w-full p-2 pl-8 border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.3)] rounded-md text-[13px] text-[rgba(0,0,0,0.7)]' />
    </div>
  )
}

export default SearchBox;