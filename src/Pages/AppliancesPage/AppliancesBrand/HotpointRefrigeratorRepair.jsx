import BreadCumb from "../../../Components/Common/BreadCumb";
import HotpointRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/HotpointRefrigeratorRepairDetail';

const HotpointRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Hotpoint-refrigerator repair-faj.avif"
        Title="Hotpoint Refrigerator Repair"
      ></BreadCumb>

      <HotpointRefrigeratorRepairDetail />
    </div>
  );
};

export default HotpointRefrigeratorRepair;
