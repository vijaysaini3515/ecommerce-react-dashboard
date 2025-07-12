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
          <div className="box bg-white p-5  border border-[rgba(0,0,0,0.1)] rounded-md flex items-center gap-4 cursor-pointer hover:bg-[#f1f1f17f]">
              <IoGift className='text-[40px] text-[#3872FA]' />
              <div className='info w-[70%]'>
                <h3>New Orders</h3>
                <b>1,390</b>
              </div>
              <FaChartSimple className='text-[50px] text-[#3872FA]' />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="box bg-white  p-5  border border-[rgba(0,0,0,0.1)] rounded-md flex items-center gap-4 cursor-pointer hover:bg-[#f1f1f17f]">
            <FaChartPie  className='text-[40px]  text-[#10B981]' />
              <div className='info w-[70%]'>
                <h3>Sales</h3>
                <b>$57,890</b>
              </div>
            <IoStatsChartSharp className='text-[50px]  text-[#10B981]'/>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="box bg-white  p-5  border border-[rgba(0,0,0,0.1)] rounded-md flex items-center gap-4 cursor-pointer hover:bg-[#f1f1f17f]">
            <BiSolidBank  className='text-[40px]  text-[#7928CA]' />
              <div className='info w-[70%]'>
                <h3>Revenue</h3>
                <b>$12,390</b>
              </div>
            <SiSoundcharts className='text-[50px]  text-[#7928CA]'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box bg-white  p-5  border border-[rgba(0,0,0,0.1)] rounded-md flex items-center gap-4 cursor-pointer hover:bg-[#f1f1f17f]">
            <RiProductHuntLine  className='text-[40px]  text-[#287cca]' />
              <div className='info w-[70%]'>
                <h3>Products</h3>
                <b>82</b>
              </div>
            <RiAlignItemBottomFill className='text-[50px]  text-[#287cca]'/>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default DashboardCardBoxes