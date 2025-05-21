import BreadCumb from "../../../Components/Common/BreadCumb";
import GorenjeFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/GorenjeFridgeRepairDetail';

const GorenjeFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Gorenje-Fridge-repair-faj.avif"
        Title="Gorenje Fridge Repair"
    ></BreadCumb>

    <GorenjeFridgeRepairDetail />        
</div>
  );
};

export default GorenjeFridgeRepair;
