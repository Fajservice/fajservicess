import BreadCumb from "../../../Components/Common/BreadCumb";
import GreeAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/GreeAcRepairDetail";

const GreeAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Gree-Ac-repair-faj.avif"
                Title="Best Gree AC Repair in Dubai – Air Conditioner Maintenance"
            ></BreadCumb> 
            <GreeAcRepairDetail></GreeAcRepairDetail>           
        </div>
    );
};

export default GreeAcRepair;