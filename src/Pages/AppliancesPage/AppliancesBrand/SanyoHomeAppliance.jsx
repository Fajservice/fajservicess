import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import SanyoHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SanyoHomeApplianceDetail';
const SanyoHomeAppliance = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/sanyo.avif"
        Title="Sanyo Home Appliance"
    ></BreadCumb>

    <SanyoHomeApplianceDetail />     
</div>
  )
}

export default SanyoHomeAppliance
