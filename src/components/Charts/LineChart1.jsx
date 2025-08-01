import React from 'react'
import ReactApexChart from 'react-apexcharts'

const LineChart1 = () => {
    const data = [
        { name: 'JAN', TotalSeals: 4000, TotalUser: 2400, amt: 2400 },
        { name: 'FEB', TotalSeals: 3000, TotalUser: 1398, amt: 2210 },
        { name: 'MAR', TotalSeals: 2000, TotalUser: 9800, amt: 2290 },
        { name: 'APR', TotalSeals: 2780, TotalUser: 3908, amt: 2000 },
        { name: 'MAY', TotalSeals: 1890, TotalUser: 4800, amt: 2181 },
        { name: 'JUN', TotalSeals: 2390, TotalUser: 3800, amt: 2500 },
        { name: 'JUL', TotalSeals: 3490, TotalUser: 4300, amt: 2100 },
        { name: 'AUG', TotalSeals: 3490, TotalUser: 1800, amt: 2100 },
        { name: 'SEP', TotalSeals: 3490, TotalUser: 7300, amt: 2100 },
        { name: 'OCT', TotalSeals: 2490, TotalUser: 8500, amt: 2100 },
        { name: 'NOV', TotalSeals: 7490, TotalUser: 900, amt: 2100 },
        { name: 'DEC', TotalSeals: 9490, TotalUser: 2500, amt: 2100 },
      ]
    
      const series = [
        {
          name: 'Total User',
          data: data.map(item => item.TotalSeals)
        },
        {
          name: 'Total Seals',
          data: data.map(item => item.TotalUser )
        }
      ]
    
      const options = {
        chart: {
          type: 'area',
          height: 350,
          toolbar: {
            show: false, // ❌ Hide the toolbar
          },
        },
        legend: {
          show: true,
          position: 'top', // 'top', 'left', 'right', or 'bottom'
          horizontalAlign: 'left', // 'left', 'center', 'right'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: data.map(item => item.name)
        },
        tooltip: {
          x: {
            show: true
          }
        }
      }

  return (
    <div>
      <div>
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
    </div>
  )
}

export default LineChart1
