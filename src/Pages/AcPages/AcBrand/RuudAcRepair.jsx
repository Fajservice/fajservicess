import BreadCumb from "../../../Components/Common/BreadCumb";
import RuudAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/RuudAcRepairDetail";

const RuudAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/ruud-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/ruud-ac-repair-faj.avif"
                Title="Ruud AC Repair in Dubai - Air Conditioner Maintenance Service Near You"
            ></BreadCumb> 
            <RuudAcRepairDetail></RuudAcRepairDetail>           
        </div>
    );
};

export default RuudAcRepair;