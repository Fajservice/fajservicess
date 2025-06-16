import BreadCumb from "../../../Components/Common/BreadCumb";
import GeGeneralElectricFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/GeGeneralElectricFridgeRepairDetail';

const GeGeneralElectricFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/ge-General-electric-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/ge-General-electric-appliance-repair-faj.avif"
        Title="GE General Electric Fridge Repair & Service"
      ></BreadCumb>

      <GeGeneralElectricFridgeRepairDetail />
    </div>
  );
};

export default GeGeneralElectricFridgeRepair;
