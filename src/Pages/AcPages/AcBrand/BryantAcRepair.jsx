import BreadCumb from "../../../Components/Common/BreadCumb";
import BryantAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/BryantAcRepairDetail";

const BryantAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/bryant-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/bryant-ac-repair-faj.avif"
                Title="Bryant AC Repair in Dubai - HVAC Maintenance"
            ></BreadCumb> 
            <BryantAcRepairDetail></BryantAcRepairDetail>           
        </div>
    );
};

export default BryantAcRepair;