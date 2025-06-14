import BreadCumb from "../../../Components/Common/BreadCumb";
import NeffFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/NeffFridgeRepairDetail';

const NeffFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/neff-fridger-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/neff-fridger-repair-faj.avif"
        Title="Neff Fridge Repair & Service"
    ></BreadCumb>

    <NeffFridgeRepairDetail />        
</div>
  );
};

export default NeffFridgeRepair;
