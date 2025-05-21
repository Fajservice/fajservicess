import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import DaewooHomeApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/DaewooHomeApplianceDetail';
const DaewooHomeAppliance = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Deawoo-home-appliance-repair-faj.avif"
        Title="Daewoo Home Appliances Installation & Repair Dubai"
    ></BreadCumb>

    <DaewooHomeApplianceDetail />     
</div>
  )
}

export default DaewooHomeAppliance