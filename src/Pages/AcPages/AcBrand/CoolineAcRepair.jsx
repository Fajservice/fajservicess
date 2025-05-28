import BreadCumb from "../../../Components/Common/BreadCumb.jsx";
import CoolineAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/CoolineAcRepairDetail.jsx";

const CoolineAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/cooline-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/coolline-ac-repair-faj.avif"
                Title="Cooline AC Repair In Dubai - AC Cleaning Service Near Me"
            ></BreadCumb> 
            <CoolineAcRepairDetail></CoolineAcRepairDetail>           
        </div>
    );
};

export default CoolineAcRepair;