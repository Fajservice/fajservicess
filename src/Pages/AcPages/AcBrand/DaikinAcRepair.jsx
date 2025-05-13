import BreadCumb from "../../../Components/Common/BreadCumb";
import DaikinAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/DaikinAcRepairDetail";

const DaikinAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Diakin-AC-bg.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Daikin AC Repair Near Me - Air Conditioner Maintenance"
            ></BreadCumb> 
            <DaikinAcRepairDetail></DaikinAcRepairDetail>           
        </div>
    );
};

export default DaikinAcRepair;