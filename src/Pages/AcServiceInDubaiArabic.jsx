import BreadCumb from "../Components/Common/BreadCumb";
import AcServiceInDubaiArabicDetail from '../Components/ServiceDetails/AcServiceInDubaiArabicDetail';

const AcServiceInDubaiArabic = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/ac-service-in-dubai-desktop-faj.avif"
                mobileBgImg="img/banners/ac-service-in-dubai-mobile-faj.avif"
            ></BreadCumb>
            <AcServiceInDubaiArabicDetail />
        </div>
    );
};

export default AcServiceInDubaiArabic;