import BreadCumb from "../../../Components/Common/BreadCumb";
import LgAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/LgAcRepairDetail";

const LgAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/LG-AC-repair-in-dubai.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="LG AC Repair in Dubai - LG AC Maintenance Services Near Me"
            ></BreadCumb> 
            <LgAcRepairDetail></LgAcRepairDetail>           
        </div>
    );
};

export default LgAcRepair;