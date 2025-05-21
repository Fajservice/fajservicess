import BreadCumb from "../../../Components/Common/BreadCumb";
import DaewooAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/DaewooAcRepairDetail";

const DaewooAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Daewoo-Ac-repair-faj.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Daewoo AC Repair in Dubai - Air Conditioner Service Near Me"
            ></BreadCumb> 
            <DaewooAcRepairDetail></DaewooAcRepairDetail>           
        </div>
    );
};

export default DaewooAcRepair;