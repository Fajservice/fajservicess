import BreadCumb from "../../../Components/Common/BreadCumb";
import CrafftAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/CrafftAcRepairDetail";

const CrafftAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/crafft-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/crafft-ac-repair-faj.avif"
                Title="Crafft AC Repair in Dubai - AC Cleaning Service Near you"
            ></BreadCumb> 
            <CrafftAcRepairDetail></CrafftAcRepairDetail>           
        </div>
    );
};

export default CrafftAcRepair;