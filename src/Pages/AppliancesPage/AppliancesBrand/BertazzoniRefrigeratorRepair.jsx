import BreadCumb from "../../../Components/Common/BreadCumb";
import BertazzoniRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BertazzoniRefrigeratorRepairDetail';

const BertazzoniRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/bertazzoni.avif"
        Title="Bertazzoni Refrigerator Repair"
    ></BreadCumb>

    <BertazzoniRefrigeratorRepairDetail />        
</div>
  );
};

export default BertazzoniRefrigeratorRepair;
