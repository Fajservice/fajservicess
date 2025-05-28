import BreadCumb from "../../../Components/Common/BreadCumb";
import SupraAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SupraAcRepairDetail";

const SupraAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/supra-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/supra-ac-repair-faj.avif"
                Title="Supra AC Repair in Dubai - Central AC Service"
            ></BreadCumb> 
            <SupraAcRepairDetail></SupraAcRepairDetail>           
        </div>
    );
};

export default SupraAcRepair;