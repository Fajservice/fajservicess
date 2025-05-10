import BreadCumb from "../../../Components/Common/BreadCumb";
import SuperGeneralAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SuperGeneralAcRepairDetail";

const SuperGeneralAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Super-General-AC-Repair-in-Dubai-banner.jpg"
                // bgImg="img/ac_service-bannerbg.jpg"
                Title="Super General Ac Repair in Dubai - Air Conditioner Maintenance and Service Near Me"
            ></BreadCumb> 
            <SuperGeneralAcRepairDetail></SuperGeneralAcRepairDetail>           
        </div>
    );
};

export default SuperGeneralAcRepair;