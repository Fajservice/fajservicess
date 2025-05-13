import BreadCumb from "../../../Components/Common/BreadCumb";
import ColemenAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/ColemenAcRepairDetail";

const ColemenAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/coleman-ac-bg.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Coleman AC Repair in Dubai - Central AC Service"
            ></BreadCumb> 
            <ColemenAcRepairDetail></ColemenAcRepairDetail>           
        </div>
    );
};

export default ColemenAcRepair;