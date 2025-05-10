import BreadCumb from "../../../Components/Common/BreadCumb";
import HaierAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/HaierAcRepairDetail";

const HaierAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Haier-ac-repair.jpg"
                // bgImg="img/ac_service-bannerbg.jpg"
                Title="Haier AC Repair Dubai - AC Cleaning Service Near Me"
            ></BreadCumb> 
            <HaierAcRepairDetail></HaierAcRepairDetail>           
        </div>
    );
};

export default HaierAcRepair;