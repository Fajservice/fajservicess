import BreadCumb from "../../../Components/Common/BreadCumb";
import FagorFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/FagorFridgeRepairDetail';

const FagorFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Fagor-Fridge-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Fagor-Fridge-repair-faj-mobile.avif"
        Title="Fagor Fridge Repair & Service"
    ></BreadCumb>

    <FagorFridgeRepairDetail />        
</div>
  );
};

export default FagorFridgeRepair;
