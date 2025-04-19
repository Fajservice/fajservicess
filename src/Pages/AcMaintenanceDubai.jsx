import BreadCumb from "../Components/Common/BreadCumb";
import AcMaintenanceDubaiDetail from "../Components/ServiceDetails/AcMaintenanceDubaiDetail";

const AcMaintenanceDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="AC Maintenance Dubai - Air Conditioner Maintenance and Services Near Me"
            ></BreadCumb> 
            <AcMaintenanceDubaiDetail></AcMaintenanceDubaiDetail>        
        </div>
    );
};

export default AcMaintenanceDubai;