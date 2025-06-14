import BreadCumb from "../../../Components/Common/BreadCumb";
import GorenjeFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/GorenjeFridgeRepairDetail';

const GorenjeFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/gorenje-washing-machine-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/gorenje-fridge-repair-faj.avif"
        Title="Gorenje Fridge Repair"
    ></BreadCumb>

    <GorenjeFridgeRepairDetail />        
</div>
  );
};

export default GorenjeFridgeRepair;
