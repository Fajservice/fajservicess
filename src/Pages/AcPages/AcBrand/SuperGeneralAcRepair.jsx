import BreadCumb from "../../../Components/Common/BreadCumb";
import SuperGeneralAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SuperGeneralAcRepairDetail";

const SuperGeneralAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/super-general-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/super-general-ac-repair-faj.avif"
                Title="Super General AC Repair in Dubai - Air Conditioner Maintenance and Service Near Me"
            ></BreadCumb> 
            <SuperGeneralAcRepairDetail></SuperGeneralAcRepairDetail>           
        </div>
    );
};

export default SuperGeneralAcRepair;