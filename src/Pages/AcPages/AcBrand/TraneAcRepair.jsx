import BreadCumb from "../../../Components/Common/BreadCumb";
import TraneAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/TraneAcRepairDetail";

const TraneAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/Trane-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/Trane-ac-repair-faj.avif"
                Title="Trane AC Repair in Dubai - Air Conditioner Maintenance and Service Near Me"
            ></BreadCumb> 
            <TraneAcRepairDetail></TraneAcRepairDetail>           
        </div>
    );
};

export default TraneAcRepair;