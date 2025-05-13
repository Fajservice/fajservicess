import BreadCumb from "../../../Components/Common/BreadCumb";
import BryantAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/BryantAcRepairDetail";

const BryantAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/bryant-ac-bg.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Bryant AC Repair in Dubai - HVAC Maintenance"
            ></BreadCumb> 
            <BryantAcRepairDetail></BryantAcRepairDetail>           
        </div>
    );
};

export default BryantAcRepair;