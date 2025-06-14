import BreadCumb from "../../../Components/Common/BreadCumb";
import HaierFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/HaierFridgeRepairDetail.jsx';

const HaierFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Haier-Fridge-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Haier-Fridge-repair-faj.avif"
        Title="Haier Fridge Repair"
      ></BreadCumb>

      <HaierFridgeRepairDetail />
    </div>
  );
};

export default HaierFridgeRepair;
