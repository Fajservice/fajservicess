import BreadCumb from "../../../Components/Common/BreadCumb";
import MaytagFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/MaytagFridgeRepairDetail';

const MaytagFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Maytag-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Maytag-appliance-repair-faj.avif"
        Title="Maytag Fridge Repair & Service"
    ></BreadCumb>

    <MaytagFridgeRepairDetail />        
</div>
  );
};

export default MaytagFridgeRepair;
