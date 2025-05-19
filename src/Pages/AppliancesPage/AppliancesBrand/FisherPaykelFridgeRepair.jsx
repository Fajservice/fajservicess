import BreadCumb from "../../../Components/Common/BreadCumb";
import FisherPaykelFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/FisherPaykelFridgeRepairDetail';

const FisherPaykelFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/fisher-and-paykal.avif"
        Title="Fisher & Paykel Fridge Repair & Service"
    ></BreadCumb>

    <FisherPaykelFridgeRepairDetail />        
</div>
  );
};

export default FisherPaykelFridgeRepair;
