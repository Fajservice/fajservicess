import BreadCumb from "../../../Components/Common/BreadCumb";
import GreeAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/GreeAcRepairDetail";

const GreeAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/Gree-AC-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Best Gree AC Repair in Dubai - Air Conditioner Maintenance"
            ></BreadCumb> 
            <GreeAcRepairDetail></GreeAcRepairDetail>           
        </div>
    );
};

export default GreeAcRepair;