import BreadCumb from "../../../Components/Common/BreadCumb";
import ToshibaAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/ToshibaAcRepairDetail";

const ToshibaAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/Toshiba-AC-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Toshiba AC Repair in Dubai - AC Maintenance Service Near Me"
            ></BreadCumb> 
            <ToshibaAcRepairDetail></ToshibaAcRepairDetail>           
        </div>
    );
};

export default ToshibaAcRepair;