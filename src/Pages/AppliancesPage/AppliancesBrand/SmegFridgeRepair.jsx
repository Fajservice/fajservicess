import BreadCumb from "../../../Components/Common/BreadCumb";
import SmegFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SmegFridgeRepairDetail';

const SmegFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Smeg-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Smeg-appliance-repair-faj.avif"
        Title="Smeg Fridge Repair & Service"
    ></BreadCumb>

    <SmegFridgeRepairDetail />        
</div>
  );
};

export default SmegFridgeRepair;
