import BreadCumb from "../../../Components/Common/BreadCumb";
import MitsubishiAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/MitsubishiAcRepairDetail";

const MitsubishiAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/mitsubishi-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/mitsubishi-ac-repair-faj.avif"
                Title="Mitsubishi AC Repair in Dubai – AC Maintenance Service"
            ></BreadCumb> 
            <MitsubishiAcRepairDetail></MitsubishiAcRepairDetail>           
        </div>
    );
};

export default MitsubishiAcRepair;