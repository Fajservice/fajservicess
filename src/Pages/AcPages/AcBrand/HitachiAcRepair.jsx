import BreadCumb from "../../../Components/Common/BreadCumb";
import HitachiAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/HitachiAcRepairDetail";

const HitachiAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/hitachi-ac-repair.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Hitachi AC Repair in Dubai - Air Conditioner Maintenance Near Me"
            ></BreadCumb> 
            <HitachiAcRepairDetail></HitachiAcRepairDetail>           
        </div>
    );
};

export default HitachiAcRepair;