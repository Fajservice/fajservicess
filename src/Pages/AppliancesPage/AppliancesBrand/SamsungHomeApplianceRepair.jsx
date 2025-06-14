import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import SamsungHomeApplianceRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SamsungHomeApplianceRepairDetail';
const SamsungHomeApplianceRepair = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/samsung-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/samsung-appliance-repair-faj.avif"
        Title="Samsung Home Appliance Repair"
    ></BreadCumb>

    <SamsungHomeApplianceRepairDetail />     
</div>
  )
}

export default SamsungHomeApplianceRepair
