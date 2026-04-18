import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import ScrollToTop from "../Components/ScrollToTop";
const Main = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="page-loading">Loading...</div>}>
        <div className='main-page-area'>
          <Header1 />
          <div className="page-content-loader" style={{ minHeight: '70vh' }}>
            <Outlet />
          </div>
          <Footer1 />
        </div>
      </Suspense>
    </>
  );
};

export default Main;