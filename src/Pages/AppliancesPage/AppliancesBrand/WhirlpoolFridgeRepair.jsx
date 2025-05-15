import BreadCumb from "../../../Components/Common/BreadCumb";
import WhirlpoolFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/WhirlpoolFridgeRepairDetail';

const WhirlpoolFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/whirlpool.avif"
        Title=""
    ></BreadCumb>

    <WhirlpoolFridgeRepairDetail />        
</div>
  );
};

export default WhirlpoolFridgeRepair;
