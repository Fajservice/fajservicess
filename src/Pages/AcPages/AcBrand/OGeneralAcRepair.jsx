import BreadCumb from "../../../Components/Common/BreadCumb";
import OGeneralAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/OGeneralAcRepairDetail";

const OGeneralAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/ogeneral-ac-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="O General AC Repair Dubai - Air Conditioner Service Near Me"
            ></BreadCumb> 
            <OGeneralAcRepairDetail></OGeneralAcRepairDetail>           
        </div>
    );
};

export default OGeneralAcRepair;