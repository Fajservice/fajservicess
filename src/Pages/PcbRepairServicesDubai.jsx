import BreadCumb from "../Components/Common/BreadCumb";
import PcbRepairServicesDubaiDetail from '../Components/ServiceDetails/PcbRepairServicesDubaiDetail';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const PcbRepairServicesDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg={`${CDN}/banners/ac-service-in-dubai-desktop-faj/public`}
                mobileBgImg={`${CDN}/banners/ac-service-in-dubai-mobile-faj/public`}
                Title="Ac Service in Dubai"
            ></BreadCumb>
            <PcbRepairServicesDubaiDetail />
        </div>
    );
};

export default PcbRepairServicesDubai;