import BreadCumb from "../../../Components/Common/BreadCumb";
import LennoxAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/LennoxAcRepairDetail";

const LennoxAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/lennox-AC-Repair-faj.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Lennox AC Repair in Dubai and Air Conditioning Maintenance"
            ></BreadCumb> 
            <LennoxAcRepairDetail></LennoxAcRepairDetail>           
        </div>
    );
};

export default LennoxAcRepair;