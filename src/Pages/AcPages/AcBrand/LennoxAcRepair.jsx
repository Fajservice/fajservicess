import BreadCumb from "../../../Components/Common/BreadCumb";
import LennoxAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/LennoxAcRepairDetail";

const LennoxAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/Lennox-ac-repair.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Lennox AC Repair in Dubai and Air Conditioning Maintenance"
            ></BreadCumb> 
            <LennoxAcRepairDetail></LennoxAcRepairDetail>           
        </div>
    );
};

export default LennoxAcRepair;