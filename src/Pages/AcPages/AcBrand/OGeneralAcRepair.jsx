import BreadCumb from "../../../Components/Common/BreadCumb";
import OGeneralAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/OGeneralAcRepairDetail";

const OGeneralAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/o-general-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/o-general-ac-repair-faj.avif"
                Title="O General AC Repair in Dubai  – AC Maintenance Service"
            ></BreadCumb> 
            <OGeneralAcRepairDetail></OGeneralAcRepairDetail>           
        </div>
    );
};

export default OGeneralAcRepair;