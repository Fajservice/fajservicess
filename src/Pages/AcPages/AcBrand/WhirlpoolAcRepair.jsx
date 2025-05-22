import BreadCumb from "../../../Components/Common/BreadCumb";
import WhirpoolAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/WhirpoolAcRepairDetail";

const WhirpoolAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/whirlpool-ac-repair-faj.avif"
                Title="Whirlpool Air Condition Repair in Dubai - AC Maintenance and Services"
            ></BreadCumb> 
            <WhirpoolAcRepairDetail></WhirpoolAcRepairDetail>           
        </div>
    );
};

export default WhirpoolAcRepair;