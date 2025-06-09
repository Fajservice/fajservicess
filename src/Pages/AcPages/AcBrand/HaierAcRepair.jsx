import BreadCumb from "../../../Components/Common/BreadCumb";
import HaierAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/HaierAcRepairDetail";

const HaierAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/haier-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/Haier-ac-repair-faj.avif"
                Title="Haier AC Repair Dubai - AC Cleaning Service Near Me"
            ></BreadCumb> 
            <HaierAcRepairDetail></HaierAcRepairDetail>           
        </div>
    );
};

export default HaierAcRepair;