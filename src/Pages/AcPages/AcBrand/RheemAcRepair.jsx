import BreadCumb from "../../../Components/Common/BreadCumb";
import RheemAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/RheemAcRepairDetail";

const RheemAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/rheem-ac-bg.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Rheem AC Repair in Dubai - Air Conditioner Maintenance and Service Near by You"
            ></BreadCumb> 
            <RheemAcRepairDetail></RheemAcRepairDetail>           
        </div>
    );
};

export default RheemAcRepair;