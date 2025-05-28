import BreadCumb from "../../../Components/Common/BreadCumb";
import McquayAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/McquayAcRepairDetail";

const McquayAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/MC-Quay-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/MC-Quay-ac-repair-faj.avif"
                Title="McQuay AC Repair in Dubai - Air Conditioner Maintenance Near Me"
            ></BreadCumb> 
            <McquayAcRepairDetail></McquayAcRepairDetail>           
        </div>
    );
};

export default McquayAcRepair;