import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import DaewooHomeApplianceRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/DaewooHomeApplianceRepairDetail';


const DaewooHomeApplianceRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Daewoo-2.avif"
        Title="Daewoo Home Appliance Repair Service and Installation"
      ></BreadCumb>
      {/* DaewooHomeApplianceDetail */}
      <DaewooHomeApplianceRepairDetail></DaewooHomeApplianceRepairDetail>
    </div>
  )
}

export default DaewooHomeApplianceRepair
