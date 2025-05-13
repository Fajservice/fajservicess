import BreadCumb from "../../../Components/Common/BreadCumb";
import MitsubishiAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/MitsubishiAcRepairDetail";

const MitsubishiAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Mitsubishi-AC-bg.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Mitsubishi AC Repair in Dubai - Air Conditioner Maintenance Near"
            ></BreadCumb> 
            <MitsubishiAcRepairDetail></MitsubishiAcRepairDetail>           
        </div>
    );
};

export default MitsubishiAcRepair;