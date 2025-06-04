import BreadCumb from "../Components/Common/BreadCumb";
import AcServiceInDubaiDetail from '../Components/ServiceDetails/AcServiceInDubaiDetail';

const AcServiceInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/ac-service-in-dubai-desktop-faj.avif"
                mobileBgImg="img/banners/ac-service-in-dubai-mobile-faj.avif"
                Title="Ac Service in Dubai"
            ></BreadCumb>
            <AcServiceInDubaiDetail />
        </div>
    );
};

export default AcServiceInDubai;