import BreadCumb from "../Components/Common/BreadCumb";
import DaewooAcRepairDetail from "../Components/ServiceDetails/DaewooAcRepairDetail";

const DaewooAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/ac_service-bannerbg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Daewoo AC Repair in Dubai - Air Conditioner Service Near Me"
            ></BreadCumb> 
            <DaewooAcRepairDetail></DaewooAcRepairDetail>           
        </div>
    );
};

export default DaewooAcRepair;