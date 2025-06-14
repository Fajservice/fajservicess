import BreadCumb from "../../../Components/Common/BreadCumb";
import HotpointRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/HotpointRefrigeratorRepairDetail';

const HotpointRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Hotpoint-refrigerator-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Hotpoint-refrigerator-repair-faj.avif"
        Title="Hotpoint Refrigerator Repair"
      ></BreadCumb>

      <HotpointRefrigeratorRepairDetail />
    </div>
  );
};

export default HotpointRefrigeratorRepair;
