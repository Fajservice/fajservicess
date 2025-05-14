import BreadCumb from "../../../Components/Common/BreadCumb";
import GorenjeFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/GorenjeFridgeRepairDetail';

const GorenjeFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Gorenja.avif"
        Title="Gorenja Fridge Repair"
    ></BreadCumb>

    <GorenjeFridgeRepairDetail />        
</div>
  );
};

export default GorenjeFridgeRepair;
