import BreadCumb from "../../../Components/Common/BreadCumb";
import BostonRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BostonRefrigeratorRepairDetail';

const BostonRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/boston-refrigerator-repair-Faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/boston-refrigerator-repair-Faj.avif"
        Title="Boston Refrigerator Repair"
      ></BreadCumb>

      <BostonRefrigeratorRepairDetail />
    </div>
  );
};

export default BostonRefrigeratorRepair;
