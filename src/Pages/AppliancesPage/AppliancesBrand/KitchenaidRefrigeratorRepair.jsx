import BreadCumb from "../../../Components/Common/BreadCumb";
import KitchenaidRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/KitchenaidRefrigeratorRepairDetail';

const KitchenaidRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/kitchenaid-appliance-repair-faj.avif"
        Title="KitchenKitchenaid Refrigerator Repair & Service"
      ></BreadCumb>

      <KitchenaidRefrigeratorRepairDetail />
    </div>
  );
};

export default KitchenaidRefrigeratorRepair;
