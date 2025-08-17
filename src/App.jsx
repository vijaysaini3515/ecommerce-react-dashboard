import React, { createContext, useEffect, useState } from 'react';
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
import Category from './pages/category';
import SubCategory from './pages/SubCategory';
import Users from './pages/Users';
import Orders from './pages/Orders';
import ForgotPassword from './pages/ForgotPassword';
import Verify from './pages/Verify';
import ChangePassword from './pages/ChangePassword';

const MyContext = createContext();

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [sideBarWidth, setSideBarWidth] = useState(18);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenPanel,setIsOpenPanel] = useState({
    open:false,
    model:''
  });
  const [windowWidth,setWindowWidth] = useState(window.innerWidth);


  const value = {
    isSideBarOpen,
    setIsSideBarOpen,
    isLogin,
    setIsLogin,
    isOpenPanel,
    setIsOpenPanel,
    windowWidth,
    setWindowWidth,
    sideBarWidth,
    setSideBarWidth

  };

  useEffect(()=>{
    const handleResize =()=>{
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[]);

  useEffect(()=>{
    if(windowWidth < 992){
      setIsSideBarOpen(false)
      // setSideBarWidth(100)
    }else{
      // setSideBarWidth(18)
    }
  },[windowWidth])

  console.log(windowWidth)


  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <section className="main relative">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper ${isSideBarOpen === true ? windowWidth < 992 ? `w-[${sideBarWidth / 2}%]`: `w-[${sideBarWidth}%]`: 'w-[0px] opacity-0'} transition-all `}>
              <Sidebar />
            </div>
            <div className= {`contentRight py-4 px-3 ${isSideBarOpen === true && windowWidth < 992 && 'opacity-0'} ${isSideBarOpen === false ? 'w-[100%]': `w-[${100 - sideBarWidth}%]`} transition-all `}>
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
      path: '/verify-account',
      element: <Verify />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/change-password',
      element: <ChangePassword />,
    },
    {
      path: '/users',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper ${isSideBarOpen === true ? 'w-[18%]': 'w-[0px] opacity-0'} transition-all `}>
              <Sidebar />
            </div>
            <div className= {`contentRight py-4 px-3 ${isSideBarOpen === true ? 'w-[82%]': 'w-[100%]'} transition-all `}>
              <Users />
            </div>
          </div>
        </section>
      ),
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
    {
      path: '/category/list',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper ${isSideBarOpen === true ? 'w-[18%]': 'w-[0px] opacity-0'} transition-all `}>
              <Sidebar />
            </div>
            <div className= {`contentRight py-4 px-3 ${isSideBarOpen === true ? 'w-[82%]': 'w-[100%]'} transition-all `}>
              <Category />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/subCategory/list',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper ${isSideBarOpen === true ? 'w-[18%]': 'w-[0px] opacity-0'} transition-all `}>
              <Sidebar />
            </div>
            <div className= {`contentRight py-4 px-3 ${isSideBarOpen === true ? 'w-[82%]': 'w-[100%]'} transition-all `}>
              <SubCategory />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/orders',
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper ${isSideBarOpen === true ? 'w-[18%]': 'w-[0px] opacity-0'} transition-all `}>
              <Sidebar />
            </div>
            <div className= {`contentRight py-4 px-3 ${isSideBarOpen === true ? 'w-[82%]': 'w-[100%]'} transition-all `}>
              <Orders />
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
