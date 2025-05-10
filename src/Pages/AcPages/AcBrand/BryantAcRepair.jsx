import BreadCumb from "../../../Components/Common/BreadCumb";
import BryantAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/BryantAcRepairDetail";

const BryantAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/bryant-ac-bg.jpg"
                // bgImg="img/ac_service-bannerbg.jpg"
                Title="Bryant AC Repair in Dubai - HVAC Maintenance"
            ></BreadCumb> 
            <BryantAcRepairDetail></BryantAcRepairDetail>           
        </div>
    );
};

export default BryantAcRepair;