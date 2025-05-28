import BreadCumb from "../../../Components/Common/BreadCumb";
import LgAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/LgAcRepairDetail";

const LgAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/LG-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/LG-ac-repair-faj.avif"
                Title="LG AC Repair in Dubai – LG AC Maintenance Service"
            ></BreadCumb> 
            <LgAcRepairDetail></LgAcRepairDetail>           
        </div>
    );
};

export default LgAcRepair;