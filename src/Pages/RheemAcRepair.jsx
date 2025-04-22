import BreadCumb from "../Components/Common/BreadCumb";
import RheemAcRepairDetail from "../Components/ServiceDetails/RheemAcRepairDetail";

const RheemAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/rheem-ac-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Rheem AC Repair in Dubai - Air Conditioner Maintenance and Service Near by You"
            ></BreadCumb> 
            <RheemAcRepairDetail></RheemAcRepairDetail>           
        </div>
    );
};

export default RheemAcRepair;