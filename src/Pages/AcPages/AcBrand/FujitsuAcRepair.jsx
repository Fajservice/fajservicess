import BreadCumb from "../../../Components/Common/BreadCumb";
import FujitsuAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/FujitsuAcRepairDetail";

const FujitsuAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Fujitsu-AC-bg.jpg"
                // bgImg="img/ac_service-bannerbg.jpg"
                Title="Fujitsu AC Repair in Dubai Air Conditioner Service Near Me"
            ></BreadCumb> 
            <FujitsuAcRepairDetail></FujitsuAcRepairDetail>           
        </div>
    );
};

export default FujitsuAcRepair;