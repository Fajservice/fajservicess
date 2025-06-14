import BreadCumb from "../../../Components/Common/BreadCumb";
import BompaniFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BompaniFridgeRepairDetail';

const BompaniFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Bompani-Fridge-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Bompani-Fridge-repair-faj.avif"
        Title="Bompani Fridge Repair"
    ></BreadCumb>

    <BompaniFridgeRepairDetail />        
</div>
  );
};

export default BompaniFridgeRepair;
