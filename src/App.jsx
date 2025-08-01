import React, { createContext, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const MyContext = createContext();

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const value = {
    isSideBarOpen,
    setIsSideBarOpen,
    isLogin,
    setIsLogin,
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
  ]);

  // 3️⃣ Wrap app with context provider
  return (
    <MyContext.Provider value={value}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export default App;

export { MyContext };
