import BreadCumb from "../../../Components/Common/BreadCumb";
import BertazzoniRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BertazzoniRefrigeratorRepairDetail';

const BertazzoniRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Bertazzoni-refrigerator-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Bertazzoni-refrigerator-repair-faj.avif"
        Title="Bertazzoni Refrigerator Repair"
      ></BreadCumb>

      <BertazzoniRefrigeratorRepairDetail />
    </div>
  );
};

export default BertazzoniRefrigeratorRepair;
