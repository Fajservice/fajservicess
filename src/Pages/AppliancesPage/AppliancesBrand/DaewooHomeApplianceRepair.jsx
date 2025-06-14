import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import DaewooHomeApplianceRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/DaewooHomeApplianceRepairDetail';


const DaewooHomeApplianceRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Deawoo-home-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Deawoo-home-appliance-repair-faj.avif"
        Title="Daewoo Home Appliance Repair Service and Installation"
      ></BreadCumb>
      {/* DaewooHomeApplianceDetail */}
      <DaewooHomeApplianceRepairDetail></DaewooHomeApplianceRepairDetail>
    </div>
  )
}

export default DaewooHomeApplianceRepair
