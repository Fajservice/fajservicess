import BreadCumb from "../../../Components/Common/BreadCumb";
import CandyRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/CandyRefrigeratorRepairDetail';

const CandyRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Candy-refrigerator-repair-faj.avif"
        Title="Candy Refrigerator Repair"
      ></BreadCumb>

      <CandyRefrigeratorRepairDetail />
    </div>
  );
};

export default CandyRefrigeratorRepair;
