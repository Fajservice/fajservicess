import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import BoschHomeApplianceRepairDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BoschHomeApplianceRepairDetail";
const BoschHomeApplianceRepair = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Bosch-home-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Bosch-home-appliance-repair-faj.avif"
        Title="Bosch Washing Machine Repair & Service"
    ></BreadCumb>

    <BoschHomeApplianceRepairDetail />     
</div>
  )
}

export default BoschHomeApplianceRepair
