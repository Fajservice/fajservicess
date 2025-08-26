
import BreadCumb from "../../../Components/Common/BreadCumb";
import PanasonicFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/PanasonicFridgeRepairDetail';


const PanasonicFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/panasoni-fridge-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/panasonic-refrigerator-repair-faj.avif"
        Title="Panasonic Fridge Repair"
    ></BreadCumb>

    <PanasonicFridgeRepairDetail/>
</div>
  )
}

export default PanasonicFridgeRepair
