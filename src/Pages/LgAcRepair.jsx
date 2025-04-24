import BreadCumb from "../Components/Common/BreadCumb";
import LgAcRepairDetail from "../Components/ServiceDetails/LgAcRepairDetail";

const LgAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/LG-AC-repair-in-dubai.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="LG AC Repair in Dubai - LG AC Maintenance Services Near Me"
            ></BreadCumb> 
            <LgAcRepairDetail></LgAcRepairDetail>           
        </div>
    );
};

export default LgAcRepair;