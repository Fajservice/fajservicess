import BreadCumb from "../../../Components/Common/BreadCumb";
import HaierAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/HaierAcRepairDetail";

const HaierAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Haier-ac-repair.avif"
                mobileBgImg="img/acbrands/mobile/Haier-ac-repair-faj.avif"
                Title="Haier AC Repair Dubai - AC Cleaning Service Near Me"
            ></BreadCumb> 
            <HaierAcRepairDetail></HaierAcRepairDetail>           
        </div>
    );
};

export default HaierAcRepair;