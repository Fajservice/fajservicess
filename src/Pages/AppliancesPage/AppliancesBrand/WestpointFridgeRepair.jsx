import BreadCumb from "../../../Components/Common/BreadCumb";
import WestpointFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/WestpointFridgeRepairDetail.jsx';

const WestpointFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/westpoint-appliance-repair-faj.avif"
        Title="Westpoint Fridge Repair & Service"
      ></BreadCumb>

      <WestpointFridgeRepairDetail />
    </div>
  );
};

export default WestpointFridgeRepair;
