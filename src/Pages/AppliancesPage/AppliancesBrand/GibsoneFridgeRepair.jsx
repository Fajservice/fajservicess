import BreadCumb from "../../../Components/Common/BreadCumb";
import GibsoneFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/GibsoneFridgeRepairDetail';

const GibsoneFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Gibson.avif"
        Title="Gibson Fridge Repair"
    ></BreadCumb>

    <GibsoneFridgeRepairDetail />        
</div>
  );
};

export default GibsoneFridgeRepair;
