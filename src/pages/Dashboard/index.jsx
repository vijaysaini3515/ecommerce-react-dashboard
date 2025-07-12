import React from 'react'
import DashboardCardBoxes from '../../components/DashboardCardBoxes';
import Button from '@mui/material/Button';
import { HiPlusSm } from "react-icons/hi";
import homeImg from '../../assets/images/shop-illustration.webp'



const Dashboard = () => {
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
    </>
  )
}

export default Dashboard