import BreadCumb from "../Components/Common/BreadCumb";
import AcServiceInDubaiDetail from "../Components/ServiceDetails/AcServiceInDubaiDetail";

const AcServiceInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Dubai's Premier AC Service - AC Repair and Maintenance"
            ></BreadCumb> 
            <AcServiceInDubaiDetail></AcServiceInDubaiDetail>           
        </div>
    );
};

export default AcServiceInDubai;