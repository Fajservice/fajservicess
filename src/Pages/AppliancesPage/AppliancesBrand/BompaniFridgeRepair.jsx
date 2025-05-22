import BreadCumb from "../../../Components/Common/BreadCumb";
import BompaniFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BompaniFridgeRepairDetail';

const BompaniFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Bompani-Fridge-repair-faj.avif"
        Title="Bompani Fridge Repair"
    ></BreadCumb>

    <BompaniFridgeRepairDetail />        
</div>
  );
};

export default BompaniFridgeRepair;
