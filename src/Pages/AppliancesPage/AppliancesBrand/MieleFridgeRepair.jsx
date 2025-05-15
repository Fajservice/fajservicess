import BreadCumb from "../../../Components/Common/BreadCumb";
import MieleFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/MieleFridgeRepairDetail';

const MieleFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/miele-appliances.avif"
        Title="miele appliances Repair "
    ></BreadCumb>

    <MieleFridgeRepairDetail />        
</div>
  );
};

export default MieleFridgeRepair;
