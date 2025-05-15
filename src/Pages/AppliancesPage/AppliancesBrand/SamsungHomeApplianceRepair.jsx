import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import SamsungHomeApplianceRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SamsungHomeApplianceRepairDetail';
const SamsungHomeApplianceRepair = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Samsung-2.avif"
        Title="Samsung Home Appliance Repair"
    ></BreadCumb>

    <SamsungHomeApplianceRepairDetail />     
</div>
  )
}

export default SamsungHomeApplianceRepair
