import BreadCumb from "../../../Components/Common/BreadCumb";
import GaggenauFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/GaggenauFridgeRepairDetail.jsx';

const GaggenauFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/gaggenau-appliances-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/gaggenau-appliances-repair-faj.avif"
        Title="Gaggenau Fridge Repair & Service"
    ></BreadCumb>

    <GaggenauFridgeRepairDetail />        
</div>
  );
};

export default GaggenauFridgeRepair;
