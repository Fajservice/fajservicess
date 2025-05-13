import BreadCumb from "../../../Components/Common/BreadCumb";
import ToshibaAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/ToshibaAcRepairDetail";

const ToshibaAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Toshiba-AC-bg.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Toshiba AC Repair in Dubai - AC Maintenance Service Near Me"
            ></BreadCumb> 
            <ToshibaAcRepairDetail></ToshibaAcRepairDetail>           
        </div>
    );
};

export default ToshibaAcRepair;