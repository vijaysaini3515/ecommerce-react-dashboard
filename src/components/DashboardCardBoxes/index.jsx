import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoGift } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { SiSoundcharts } from "react-icons/si";
import { BiSolidBank } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";
import { RiAlignItemBottomFill } from "react-icons/ri";

const DashboardCardBoxes = () => {
  return (
    <div>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={true}
        // className="mySwiper"
      >
        <SwiperSlide>
          <div className="box bg-[#28239e] p-5  border border-[rgba(0,0,0,0.1)] rounded-md flex items-center gap-4 cursor-pointer hover:bg-[#2C2C2C]">
              <IoGift className='text-[40px] text-[#FFF]' />
              <div className='info w-[70%] text-[#FFF]'>
                <h3 className='text-[#FFF]'>New Orders</h3>
                <b className='text-[#FFF]'>1,390</b>
              </div>
              <FaChartSimple className='text-[50px] text-[#FFF]' />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="box bg-[#3B38A0]  p-5  border border-[rgba(0,0,0,0.1)] rounded-md flex items-center gap-4 cursor-pointer hover:bg-[#1E1E1E]">
            <FaChartPie  className='text-[40px]  text-[#FFF]' />
              <div className='info w-[70%] text-[#FFF]'>
                <h3 className='text-[#FFF]'>Sales</h3>
                <b className='text-[#FFF]'>$57,890</b>
              </div>
            <IoStatsChartSharp className='text-[50px]  text-[#FFF]'/>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="box bg-[#7A85C1]  p-5  border border-[rgba(0,0,0,0.1)] rounded-md flex items-center gap-4 cursor-pointer hover:bg-[#3A3A3A]">
            <BiSolidBank  className='text-[40px]  text-[#FFF]' />
              <div className='info w-[70%] text-[#FFF]'>
                <h3 className='text-[#FFF]'>Revenue</h3>
                <b className='text-[#FFF]'>$12,390</b>
              </div>
            <SiSoundcharts className='text-[50px]  text-[#FFF]'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box bg-[#B2B0E8]  p-5  border border-[rgba(0,0,0,0.1)] rounded-md flex items-center gap-4 cursor-pointer hover:bg-[#121212]">
            <RiProductHuntLine  className='text-[40px]  text-[#FFF]' />
              <div className='info w-[70%] text-[#FFF]'>
                <h3 className='text-[#FFF]'>Products</h3>
                <b className='text-[#FFF]'>82</b>
              </div>
            <RiAlignItemBottomFill className='text-[50px]  text-[#FFF]'/>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default DashboardCardBoxes