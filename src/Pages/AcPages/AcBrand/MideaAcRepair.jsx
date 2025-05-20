import BreadCumb from "../../../Components/Common/BreadCumb";
import MideaAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/MideaAcRepairDetail";

const MideaAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/midea-ac-bg.avif"
                Title="Best Midea AC Repair in Dubai – AC Maintenance Service"
            ></BreadCumb> 
            <MideaAcRepairDetail></MideaAcRepairDetail>           
        </div>
    );
};

export default MideaAcRepair;