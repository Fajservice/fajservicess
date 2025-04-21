import BreadCumb from "../Components/Common/BreadCumb";
import CoolineAcRepairDetail from "../Components/ServiceDetails/CoolineAcRepairDetail.jsx";

const CoolineAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/ac_service-bannerbg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Cooline AC Repair In Dubai - AC Cleaning Service Near Me"
            ></BreadCumb> 
            <CoolineAcRepairDetail></CoolineAcRepairDetail>           
        </div>
    );
};

export default CoolineAcRepair;