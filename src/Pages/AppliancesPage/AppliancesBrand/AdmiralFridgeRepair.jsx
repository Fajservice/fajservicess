import BreadCumb from "../../../Components/Common/BreadCumb";
import AdmiralFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/AdmiralFridgeRepairDetail';

const AdmiralFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/admiral-ac-repair.avif"
        Title="Admiral Fridge Repair"
    ></BreadCumb>

    <AdmiralFridgeRepairDetail />        
</div>
  );
};

export default AdmiralFridgeRepair;
