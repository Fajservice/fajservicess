import BreadCumb from "../../../Components/Common/BreadCumb";
import CrafftAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/CrafftAcRepairDetail";

const CrafftAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/craft-ac-bg.jpg"
                // bgImg="img/ac_service-bannerbg.jpg"
                Title="Crafft AC Repair in Dubai - AC Cleaning Service Near you"
            ></BreadCumb> 
            <CrafftAcRepairDetail></CrafftAcRepairDetail>           
        </div>
    );
};

export default CrafftAcRepair;