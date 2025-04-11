import BreadCumb from "../Components/Common/BreadCumb";
import YorkAcRepairDetail from "../Components/ServiceDetails/YorkAcRepairDetail";

const YorkAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/page_heading_1.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="York AC Repair in Dubai - Air Conditioning Maintenance Near Me"
            ></BreadCumb> 
            <YorkAcRepairDetail></YorkAcRepairDetail>           
        </div>
    );
};

export default YorkAcRepair;