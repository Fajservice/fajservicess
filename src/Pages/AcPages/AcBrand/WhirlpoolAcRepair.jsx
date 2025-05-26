import BreadCumb from "../../../Components/Common/BreadCumb";
import WhirlpoolAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/WhirlpoolAcRepairDetail";

const WhirlpoolAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/whirlpool-ac-repair-faj.avif"
                Title="Whirlpool Air Condition Repair in Dubai - AC Maintenance and Services"
            ></BreadCumb> 
            <WhirlpoolAcRepairDetail></WhirlpoolAcRepairDetail>           
        </div>
    );
};

export default WhirlpoolAcRepair;