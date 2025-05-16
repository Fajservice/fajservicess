import BreadCumb from "../../../Components/Common/BreadCumb";
import IfbRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/IfbRefrigeratorRepairDetail';

const IfbRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/IfbRefrigeratorRepair.avif"
        Title="Ifb Refrigerator Repair"
      ></BreadCumb>

      <IfbRefrigeratorRepairDetail />
    </div>
  );
};

export default IfbRefrigeratorRepair;
