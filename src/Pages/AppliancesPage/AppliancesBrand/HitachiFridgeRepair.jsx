import BreadCumb from "../../../Components/Common/BreadCumb";
import HitachiFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/HitachiFridgeRepairDetail';

const HitachiFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/hitachi-refrigerator-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/hitachi-fridge-repair-faj.avif"
        Title="Hitachi Fridge Repair & Services"
    ></BreadCumb>

    <HitachiFridgeRepairDetail />        
</div>
  );
};

export default HitachiFridgeRepair;
