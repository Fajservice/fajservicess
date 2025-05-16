import BreadCumb from "../../../Components/Common/BreadCumb";
import BaumaticRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BaumaticRefrigeratorRepairDetail';

const BaumaticRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/BaumaticRefrigeratorRepair.avif"
        Title="Baumatic Fridge Repair & Service"
      ></BreadCumb>

      <BaumaticRefrigeratorRepairDetail />
    </div>
  );
};

export default BaumaticRefrigeratorRepair;
