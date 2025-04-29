import BreadCumb from "../../../Components/Common/BreadCumb";
import McquayAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/McquayAcRepairDetail";

const McquayAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/mcquay-ac-repair.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="McQuay AC Repair in Dubai - Air Conditioner Maintenance Near Me"
            ></BreadCumb> 
            <McquayAcRepairDetail></McquayAcRepairDetail>           
        </div>
    );
};

export default McquayAcRepair;