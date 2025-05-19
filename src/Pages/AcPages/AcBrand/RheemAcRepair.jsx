import BreadCumb from "../../../Components/Common/BreadCumb";
import RheemAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/RheemAcRepairDetail";

const RheemAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/rheem-ac-bg.avif"
                Title="Best Rheem AC Maintenance in Dubai – AC Repair Service"
            ></BreadCumb> 
            <RheemAcRepairDetail></RheemAcRepairDetail>           
        </div>
    );
};

export default RheemAcRepair;