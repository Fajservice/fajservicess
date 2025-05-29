import BreadCumb from "../Components/Common/BreadCumb";
import AcMaintenanceDubaiDetail from "../Components/ServiceDetails/AcMaintenanceDubaiDetail";

const AcMaintenanceDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/ac-maintenance.avif"
                Title="AC MAINTENANCE IN DUBAI - AC MAINTENANCE AND SERVICE NEAR YOU"
            ></BreadCumb> 
            <AcMaintenanceDubaiDetail></AcMaintenanceDubaiDetail>        
        </div>
    );
};

export default AcMaintenanceDubai;