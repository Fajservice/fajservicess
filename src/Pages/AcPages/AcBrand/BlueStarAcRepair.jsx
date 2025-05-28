import BreadCumb from "../../../Components/Common/BreadCumb";
import BlueStarAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/BlueStarAcRepairDetail";

const BlueStarAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/bluestar-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/bluestar-ac-repair-faj.avif"
                Title="Blue Star AC Repair Dubai - AC Maintenance Services"
            ></BreadCumb> 
            <BlueStarAcRepairDetail></BlueStarAcRepairDetail>           
        </div>
    );
};

export default BlueStarAcRepair;