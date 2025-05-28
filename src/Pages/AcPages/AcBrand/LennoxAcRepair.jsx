import BreadCumb from "../../../Components/Common/BreadCumb";
import LennoxAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/LennoxAcRepairDetail";

const LennoxAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/Lennox-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/Lennox-ac-repair-faj.avif"
                Title="Lennox AC Repair in Dubai and Air Conditioning Maintenance"
            ></BreadCumb> 
            <LennoxAcRepairDetail></LennoxAcRepairDetail>           
        </div>
    );
};

export default LennoxAcRepair;