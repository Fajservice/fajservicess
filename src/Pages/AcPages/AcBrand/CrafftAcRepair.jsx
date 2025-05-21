import BreadCumb from "../../../Components/Common/BreadCumb";
import CrafftAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/CrafftAcRepairDetail";

const CrafftAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Craft-ac-repair-faj.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Crafft AC Repair in Dubai - AC Cleaning Service Near you"
            ></BreadCumb> 
            <CrafftAcRepairDetail></CrafftAcRepairDetail>           
        </div>
    );
};

export default CrafftAcRepair;