import BreadCumb from "../../../Components/Common/BreadCumb";
import MideaAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/MideaAcRepairDetail";

const MideaAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/midea-ac-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Midea AC Repair in Dubai - Air Conditioner Maintenance Near Me"
            ></BreadCumb> 
            <MideaAcRepairDetail></MideaAcRepairDetail>           
        </div>
    );
};

export default MideaAcRepair;