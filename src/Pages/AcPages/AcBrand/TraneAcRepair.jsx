import BreadCumb from "../../../Components/Common/BreadCumb";
import TraneAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/TraneAcRepairDetail";

const TraneAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Trane-ac-bg.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Trane Ac Repair in Dubai - Air Conditioner Maintenance and Service Near Me"
            ></BreadCumb> 
            <TraneAcRepairDetail></TraneAcRepairDetail>           
        </div>
    );
};

export default TraneAcRepair;