import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import ScrollToTop from "../Components/ScrollToTop";
import { preloadCommonRoutes } from "../Routes/preloadRoutes";

const Main = () => {
  useEffect(() => {
    let idleId;
    const preloadWhenIdle = () => {
      const idleCallback = window.requestIdleCallback;

      if (idleCallback) {
        idleId = idleCallback(preloadCommonRoutes, { timeout: 3000 });
        return;
      }

      preloadCommonRoutes();
    };

    const timerId = window.setTimeout(preloadWhenIdle, 6000);
    const preloadOnInteraction = () => {
      window.clearTimeout(timerId);
      preloadWhenIdle();
    };

    window.addEventListener('pointerdown', preloadOnInteraction, { once: true, passive: true });
    window.addEventListener('keydown', preloadOnInteraction, { once: true });

    return () => {
      window.clearTimeout(timerId);
      window.cancelIdleCallback?.(idleId);
      window.removeEventListener('pointerdown', preloadOnInteraction);
      window.removeEventListener('keydown', preloadOnInteraction);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
        <div className='main-page-area'>
          <Header1 />
          <div className="page-content-loader" style={{ minHeight: '70vh' }}>
            <Outlet />
          </div>
          <Footer1 />
        </div>
    </>
  );
};

export default Main;
