import { useEffect, useState } from 'react';

const WaitForOutletReady = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay just enough to ensure child component mounts
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 10); // 10ms usually sufficient to avoid layout flicker

    return () => clearTimeout(timeout);
  }, []);

  return isMounted ? children : null;
};

export default WaitForOutletReady;
