import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import BoschHomeApplianceRepairDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BoschHomeApplianceRepairDetail";
const BoschHomeApplianceRepair = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/small-home.avif"
        Title="Bosch Washing Machine Repair & Service"
    ></BreadCumb>

    <BoschHomeApplianceRepairDetail />     
</div>
  )
}

export default BoschHomeApplianceRepair
