
import BreadCumb from "../../../Components/Common/BreadCumb";
import HooverFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/HooverFridgeRepairDetail';
const HooverFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/hoover-washing-machine-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/hoover-washing-machine-repair-faj.avif"
        Title="Fast and Efficient Hoover Repair in Dubai"
    ></BreadCumb>

    <HooverFridgeRepairDetail />     
</div>
  )
}

export default HooverFridgeRepair
