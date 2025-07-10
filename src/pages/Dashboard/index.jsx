import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
  return (
    <section>
       <Header />
       <div className="contentMain flex">
          <div className="sidebarWrapper w-[18%]">
            <Sidebar />
          </div>
       </div>
    </section>
  )
}

export default Dashboard