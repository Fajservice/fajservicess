import BreadCumb from "../../../Components/Common/BreadCumb";
import GibsoneFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/GibsoneFridgeRepairDetail';

const GibsoneFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Gibson-Fridge-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Gibson-Fridge-repair-faj.avif"
        Title="Gibson Fridge Repair"
    ></BreadCumb>

    <GibsoneFridgeRepairDetail />        
</div>
  );
};

export default GibsoneFridgeRepair;
