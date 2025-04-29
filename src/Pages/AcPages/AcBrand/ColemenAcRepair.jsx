import BreadCumb from "../../../Components/Common/BreadCumb";
import ColemenAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/ColemenAcRepairDetail";

const ColemenAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/coleman-ac-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Coleman AC Repair in Dubai - Central AC Service"
            ></BreadCumb> 
            <ColemenAcRepairDetail></ColemenAcRepairDetail>           
        </div>
    );
};

export default ColemenAcRepair;