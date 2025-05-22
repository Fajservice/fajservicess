import BreadCumb from "../../../Components/Common/BreadCumb";
import BrandtFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BrandtFridgeRepairDetail';

const BrandtFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Brandt-fridge-repair-faj.avif"
        Title="Brandt Fridge Repair"
      ></BreadCumb>

      <BrandtFridgeRepairDetail />
    </div>
  );
};

export default BrandtFridgeRepair;
