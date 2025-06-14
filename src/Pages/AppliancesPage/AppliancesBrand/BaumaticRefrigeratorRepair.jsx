import BreadCumb from "../../../Components/Common/BreadCumb";
import BaumaticRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BaumaticRefrigeratorRepairDetail';

const BaumaticRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Baumatic-Appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Baumatic-Appliance-repair-faj.avif"
        Title="Baumatic Fridge Repair & Service"
      ></BreadCumb>

      <BaumaticRefrigeratorRepairDetail />
    </div>
  );
};

export default BaumaticRefrigeratorRepair;
