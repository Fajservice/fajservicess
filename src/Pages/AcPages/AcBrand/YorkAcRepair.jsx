import BreadCumb from "../../../Components/Common/BreadCumb";
import YorkAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/YorkAcRepairDetail";

const YorkAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/ac_service-bannerbg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="York AC Repair in Dubai - Air Conditioning Maintenance Near Me"
            ></BreadCumb> 
            <YorkAcRepairDetail></YorkAcRepairDetail>           
        </div>
    );
};

export default YorkAcRepair;