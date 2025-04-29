import BreadCumb from "../../../Components/Common/BreadCumb";
import SupraAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SupraAcRepairDetail";

const SupraAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/supra-ac-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Supra AC Repair in Dubai - Central AC Service"
            ></BreadCumb> 
            <SupraAcRepairDetail></SupraAcRepairDetail>           
        </div>
    );
};

export default SupraAcRepair;