import BreadCumb from "../../../Components/Common/BreadCumb";
import FagorFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/FagorFridgeRepairDetail';

const FagorFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/ac-maintenance.avif"
        Title="Fagor Fridge Repair & Service"
    ></BreadCumb>

    <FagorFridgeRepairDetail />        
</div>
  );
};

export default FagorFridgeRepair;
