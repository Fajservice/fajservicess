
import BreadCumb from "../../../Components/Common/BreadCumb";
import SiemensHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SiemensHomeApplianceDetail';
const SiemensHomeAppliance = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/siemens-dryer-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/siemens-dryer-repair-faj.avif"
        Title="Siemens Home Appliance"
    ></BreadCumb>

    <SiemensHomeApplianceDetail />     
</div>
  )
}

export default SiemensHomeAppliance
