import BreadCumb from "../Components/Common/BreadCumb";
import AcServiceInDubaiDetail from '../Components/ServiceDetails/AcServiceInDubaiDetail';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const AcServiceInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg={`${CDN}/banners/ac-service-in-dubai-desktop-faj/public`}
                mobileBgImg={`${CDN}/banners/ac-service-in-dubai-mobile-faj/public`}
                Title="Ac Service in Dubai"
            ></BreadCumb>
            <AcServiceInDubaiDetail />
        </div>
    );
};

export default AcServiceInDubai;