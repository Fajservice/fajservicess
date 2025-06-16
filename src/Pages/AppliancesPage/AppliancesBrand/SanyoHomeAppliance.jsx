import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import SanyoHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SanyoHomeApplianceDetail';
const SanyoHomeAppliance = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/sanyo-fridge-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/sanyo-fridge-repair-faj.avif"
        Title="Sanyo Home Appliance Repair and services"
    ></BreadCumb>

    <SanyoHomeApplianceDetail />     
</div>
  )
}

export default SanyoHomeAppliance
