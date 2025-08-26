
import BreadCumb from "../../../Components/Common/BreadCumb";
import AegFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/AegFridgeRepairDetail';
const AegFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/AEG-Fridge-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/AEG-Fridge-repair-faj.avif"
        Title="Aeg Fridge Repair in Dubai"
    ></BreadCumb>

    <AegFridgeRepairDetail />     
</div>
  )
}

export default AegFridgeRepair
