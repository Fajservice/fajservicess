import BreadCumb from "../../../Components/Common/BreadCumb.jsx";
import CoolineAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/CoolineAcRepairDetail.jsx";

const CoolineAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/coolline-ac-bg.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Cooline AC Repair In Dubai - AC Cleaning Service Near Me"
            ></BreadCumb> 
            <CoolineAcRepairDetail></CoolineAcRepairDetail>           
        </div>
    );
};

export default CoolineAcRepair;