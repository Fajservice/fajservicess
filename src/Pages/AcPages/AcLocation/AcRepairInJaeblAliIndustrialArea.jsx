import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJaeblAliIndustrialAreaDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInJaeblAliIndustrialAreaDetail';
const AcRepairInJaeblAliIndustrialArea = () => {
  return (
    <div className="serviceDetails">
       <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
           Title="AC Service in Limestone House DIFC"
       ></BreadCumb>
       <AcRepairInJaeblAliIndustrialAreaDetail />
   </div>
  )
}

export default AcRepairInJaeblAliIndustrialArea
