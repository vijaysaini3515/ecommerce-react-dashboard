import React, { createContext, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import AddPanel from './pages/AddPanel';
import HomeSliderBanner from './pages/HomeSliderBanner';

const MyContext = createContext();

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenPanel,setIsOpenPanel] = useState({
    open:false,
    model:''
  })

  const value = {
    isSideBarOpen,
    setIsSideBarOpen,
    isLogin,
    setIsLogin,
    isOpenPanel,
    setIsOpenPanel
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper ${isSideBarOpen === true ? 'w-[18%]': 'w-[0px] opacity-0'} transition-all `}>
              <Sidebar />
            </div>
            <div className= {`contentRight py-4 px-3 ${isSideBarOpen === true ? 'w-[82%]': 'w-[100%]'} transition-all `}>
              <Dashboard />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/products',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper ${isSideBarOpen === true ? 'w-[18%]': 'w-[0px] opacity-0'} transition-all `}>
              <Sidebar />
            </div>
            <div className= {`contentRight py-4 px-3 ${isSideBarOpen === true ? 'w-[82%]': 'w-[100%]'} transition-all `}>
              <Products />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/homeSlider/list',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper ${isSideBarOpen === true ? 'w-[18%]': 'w-[0px] opacity-0'} transition-all `}>
              <Sidebar />
            </div>
            <div className= {`contentRight py-4 px-3 ${isSideBarOpen === true ? 'w-[82%]': 'w-[100%]'} transition-all `}>
              <HomeSliderBanner />
            </div>
          </div>
        </section>
      ),
    },
  ]);

  // 3️⃣ Wrap app with context provider
  return (
    <MyContext.Provider value={value}>
      <RouterProvider router={router} />
    <AddPanel />

    </MyContext.Provider>
  );
};

export default App;

export { MyContext };
