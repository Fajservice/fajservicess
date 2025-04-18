import BreadCumb from "../Components/Common/BreadCumb";
import DaikinAcRepairDetail from "../Components/ServiceDetails/DaikinAcRepairDetail";

const DaikinAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/ac_service-bannerbg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Daikin AC Repair Near Me - Air Conditioner Maintenance"
            ></BreadCumb> 
            <DaikinAcRepairDetail></DaikinAcRepairDetail>           
        </div>
    );
};

export default DaikinAcRepair;