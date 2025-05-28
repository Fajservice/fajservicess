import BreadCumb from "../../../Components/Common/BreadCumb";
import HitachiAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/HitachiAcRepairDetail";

const HitachiAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/hitachi-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/hitachi-ac-repair-faj.avif"
                Title="Hitachi AC Repair in Dubai - Air Conditioner Maintenance Near Me"
            ></BreadCumb> 
            <HitachiAcRepairDetail></HitachiAcRepairDetail>           
        </div>
    );
};

export default HitachiAcRepair;