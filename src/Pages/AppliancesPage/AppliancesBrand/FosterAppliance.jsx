import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import FosterApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/FosterApplianceDetail';
const FosterAppliance = () => {
  return (
  <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Foster.avif"
        Title="Foster Appliances Service & Maintenance"
    ></BreadCumb>

    <FosterApplianceDetail />     
</div>
  )
}

export default FosterAppliance
