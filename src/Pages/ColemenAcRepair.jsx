import BreadCumb from "../Components/Common/BreadCumb";
import ColemenAcRepairDetail from "../Components/ServiceDetails/ColemenAcRepairDetail";

const ColemenAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/page_heading_1.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Coleman AC Repair in Dubai - Central AC Service"
            ></BreadCumb> 
            <ColemenAcRepairDetail></ColemenAcRepairDetail>           
        </div>
    );
};

export default ColemenAcRepair;