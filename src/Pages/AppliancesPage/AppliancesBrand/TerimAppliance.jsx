import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import TerimApplianceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/TerimApplianceDetail';
const TerimAppliance = () => {
  return (
   <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/small-home.avif"
        Title="Terim Appliance Services"
    ></BreadCumb>

    <TerimApplianceDetail />     
</div>
  )
}

export default TerimAppliance
