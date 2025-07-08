import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import ElectroluxHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/ElectroluxHomeApplianceDetail';
const ElectroluxHomeAppliance = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Electrolux-appliances-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Electrolux-appliances-repair-faj.avif"
        Title="Electrolux Home Appliance Repair in Dubai"
      ></BreadCumb>

      <ElectroluxHomeApplianceDetail />
    </div>
  )
}

export default ElectroluxHomeAppliance
