import BreadCumb from "../../../Components/Common/BreadCumb";
import SmegFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SmegFridgeRepairDetail';

const SmegFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/ac-maintenance.avif"
        Title="Smeg Fridge Repair & Service"
    ></BreadCumb>

    <SmegFridgeRepairDetail />        
</div>
  );
};

export default SmegFridgeRepair;
