import BreadCumb from "../../../Components/Common/BreadCumb";
import DeDietrichFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/DeDietrichFridgeRepairDetail';

const DeDietrichFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/de-dietrich-fridge-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/de-dietrich-fridge-repair-faj.avif"
        Title="DeDietrich Fridge Repair"
      ></BreadCumb>

      <DeDietrichFridgeRepairDetail />
    </div>
  );
};

export default DeDietrichFridgeRepair;
