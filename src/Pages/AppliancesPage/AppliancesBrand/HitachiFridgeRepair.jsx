import BreadCumb from "../../../Components/Common/BreadCumb";
import HitachiFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/HitachiFridgeRepairDetail';

const HitachiFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Haier-fridge-repair.avif"
        Title="Hitachi Fridge Repair & Services"
    ></BreadCumb>

    <HitachiFridgeRepairDetail />        
</div>
  );
};

export default HitachiFridgeRepair;
