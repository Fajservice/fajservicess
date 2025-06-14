import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import FosterApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/FosterApplianceDetail';
const FosterAppliance = () => {
  return (
  <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Foster-appliances-service-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Foster-appliances-service-faj.avif"
        Title="Foster Appliances Service & Maintenance"
    ></BreadCumb>

    <FosterApplianceDetail />     
</div>
  )
}

export default FosterAppliance
