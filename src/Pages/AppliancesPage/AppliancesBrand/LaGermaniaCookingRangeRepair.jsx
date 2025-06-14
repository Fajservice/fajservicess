import BreadCumb from "../../../Components/Common/BreadCumb";
import LaGermaniaCookingRangeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/LaGermaniaCookingRangeRepairDetail';

const LaGermaniaCookingRangeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/La-Germania-cooker-Repair-Service-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/La-Germania-cooker-Repair-Service-faj.avif"
        Title="LaGermania Cooking Range Repair"
      ></BreadCumb>

      <LaGermaniaCookingRangeRepairDetail />
    </div>
  );
};

export default LaGermaniaCookingRangeRepair;
