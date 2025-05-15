import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import DaewooHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/DaewooHomeApplianceDetail';
const DaewooHomeApplianceRepair = () => {
  return (
     <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Daewoo-2.avif"
        Title="Daewoo Home Appliace Repair"
    ></BreadCumb>

    <DaewooHomeApplianceDetail />     
</div>
  )
}

export default DaewooHomeApplianceRepair
