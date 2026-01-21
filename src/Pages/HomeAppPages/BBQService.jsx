import BreadCumb from "../../Components/Common/BreadCumb";
import BBQServiceDetail from "../../Components/ServiceDetails/HomeAppDetails/BBQServiceDetail";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
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