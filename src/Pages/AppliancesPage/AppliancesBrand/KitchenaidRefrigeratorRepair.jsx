import BreadCumb from "../../../Components/Common/BreadCumb";
import KitchenaidRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/KitchenaidRefrigeratorRepairDetail';

const KitchenaidRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/kitchenaid-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/kitchenaid-appliance-repair-faj.avif"
        Title="Kitchenaid Refrigerator Repair & Service"
      ></BreadCumb>

      <KitchenaidRefrigeratorRepairDetail />
    </div>
  );
};

export default KitchenaidRefrigeratorRepair;
