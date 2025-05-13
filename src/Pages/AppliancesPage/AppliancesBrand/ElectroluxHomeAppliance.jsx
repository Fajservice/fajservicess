import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import ElectroluxHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/ElectroluxHomeApplianceDetail';
const ElectroluxHomeAppliance = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/small-home.avif"
        Title="Electrolux Home Appliance"
    ></BreadCumb>

    <ElectroluxHomeApplianceDetail />     
</div>
  )
}

export default ElectroluxHomeAppliance
