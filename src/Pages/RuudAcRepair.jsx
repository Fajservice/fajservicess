import BreadCumb from "../Components/Common/BreadCumb";
import RuudAcRepairDetail from "../Components/ServiceDetails/RuudAcRepairDetail";

const RuudAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/Ruud-ac-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Ruud AC Repair in Dubai - Air Conditioner Maintenance Service Near You"
            ></BreadCumb> 
            <RuudAcRepairDetail></RuudAcRepairDetail>           
        </div>
    );
};

export default RuudAcRepair;