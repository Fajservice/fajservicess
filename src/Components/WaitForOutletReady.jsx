import { useEffect, useState } from 'react';

const WaitForOutletReady = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay to ensure Outlet is mounted
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 50); // a bit longer if needed

    return () => clearTimeout(timeout);
  }, []);

  return isMounted ? children : <div className="page-loading">Loading...</div>;
};

export default WaitForOutletReady;
