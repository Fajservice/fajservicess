import BreadCumb from "../../../Components/Common/BreadCumb";
import FujitsuAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/FujitsuAcRepairDetail";

const FujitsuAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/Fujitsu-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/fujistu-ac-repair-faj.avif"
                Title="Fujitsu AC Repair in Dubai Air Conditioner Service Near Me"
            ></BreadCumb>
            <FujitsuAcRepairDetail></FujitsuAcRepairDetail>
        </div>
    );
};

export default FujitsuAcRepair;