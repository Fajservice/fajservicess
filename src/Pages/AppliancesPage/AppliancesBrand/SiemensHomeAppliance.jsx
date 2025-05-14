import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import SiemensHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SiemensHomeApplianceDetail';
const SiemensHomeAppliance = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Siemens(2).avif"
        Title="Siemens Home Appliance"
    ></BreadCumb>

    <SiemensHomeApplianceDetail />     
</div>
  )
}

export default SiemensHomeAppliance
