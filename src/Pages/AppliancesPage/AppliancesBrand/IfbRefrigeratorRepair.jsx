import BreadCumb from "../../../Components/Common/BreadCumb";
import IfbRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/IfbRefrigeratorRepairDetail';

const IfbRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/IFB-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/IFB-appliance-repair-faj.avif"
        Title="Ifb Refrigerator Repair"
      ></BreadCumb>

      <IfbRefrigeratorRepairDetail />
    </div>
  );
};

export default IfbRefrigeratorRepair;
