import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import BoschHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BoschHomeApplianceDetail';
const BoschHomeAppliance = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Bosch-home-appliance-repair-faj.avif"
        Title="Bosch Home Appliances Repair"
    ></BreadCumb>

    <BoschHomeApplianceDetail/>     
</div>
  )
}

export default BoschHomeAppliance
