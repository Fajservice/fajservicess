import BreadCumb from "../../../Components/Common/BreadCumb";
import GreeAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/GreeAcRepairDetail";

const GreeAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/gree-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/gree-ac-repair-faj.avif"
                Title="Best Gree AC Repair in Dubai – Air Conditioner Maintenance"
            ></BreadCumb> 
            <GreeAcRepairDetail></GreeAcRepairDetail>           
        </div>
    );
};

export default GreeAcRepair;