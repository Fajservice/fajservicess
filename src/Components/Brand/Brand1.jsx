import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  let variant = 'mobile';
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const realWidth = width;
    if (realWidth > 1200) {
      variant = 'large';
    } else if (realWidth > 768) {
      variant = 'desktop';
    } else if (realWidth > 480) {
      variant = 'tablet';
    } else {
      variant = 'mobile';
    }
  }
  return `${CDN}/${imgPath}/${variant}`;
};
const Brand1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="cs_brands_area">
        <div className="container">
          <div className="cs_brands_wrapper cs_white_bg cs_heading_color cs_bg_filed" data-background={getImageSrc('brand_bg_1')}>
            <div className="cs_brand">
                <img src={getImageSrc('companylogos/airforce')} alt="Air Force" />
            </div>
            <div className="cs_brand">
                
                <img src={getImageSrc('companylogos/al-rawabi')} alt="Al Rawabi" />
            </div>
            <div className="cs_brand">
                <img src={getImageSrc('companylogos/dubai properties')} alt="Dubai Properties" />
            </div>
            <div className="cs_brand">
                <img src={getImageSrc('companylogos/fawaz')} alt="Fawaz" />
            </div>
            <div className="cs_brand">
                <img src={getImageSrc('companylogos/transguard')} alt="Transguard" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Brand1;