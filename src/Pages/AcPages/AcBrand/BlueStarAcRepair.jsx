import BreadCumb from "../../../Components/Common/BreadCumb";
import BlueStarAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/BlueStarAcRepairDetail";

const BlueStarAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Blue-Star-Ac-Repair-Faj.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Blue Star AC Repair Dubai - AC Maintenance Services"
            ></BreadCumb> 
            <BlueStarAcRepairDetail></BlueStarAcRepairDetail>           
        </div>
    );
};

export default BlueStarAcRepair;