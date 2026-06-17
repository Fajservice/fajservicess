import BreadCumb from "../../Components/Common/BreadCumb";
import BBQServiceDetail from "../../Components/ServiceDetails/HomeAppDetails/BBQServiceDetail";
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

const BBQService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg={getImageSrc('banners/BBQ')}
                Title="Barbecue Repair – Best BBQ Grill Cleaning Service Dubai"
            ></BreadCumb>
            <BBQServiceDetail></BBQServiceDetail>

        </div>
    );
};

export default BBQService;