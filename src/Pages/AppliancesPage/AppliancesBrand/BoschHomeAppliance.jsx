import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import BoschHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BoschHomeApplianceDetail';
const BoschHomeAppliance = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/small-home.avif"
        Title="Bosch Home Appliances"
    ></BreadCumb>

    <BoschHomeApplianceDetail/>     
</div>
  )
}

export default BoschHomeAppliance
