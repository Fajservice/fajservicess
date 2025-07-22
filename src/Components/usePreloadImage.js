import { useEffect } from 'react';

const getMimeType = (src) => {
  const ext = src.split('.').pop().toLowerCase();
  switch (ext) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'webp':
      return 'image/webp';
    case 'gif':
      return 'image/gif';
    case 'svg':
      return 'image/svg+xml';
    case 'avif':
      return 'image/avif';
    default:
      return 'image/*';
  }
};

const usePreloadImage = (src) => {
  useEffect(() => {
    if (!src) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.type = getMimeType(src);

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [src]);
};

export default usePreloadImage;
