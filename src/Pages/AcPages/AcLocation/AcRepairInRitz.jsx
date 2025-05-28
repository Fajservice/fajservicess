import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInRitzDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInRitzDetail';
const AcRepairInRitz = () => {
    
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in the Ritz Carlton DIFC"
    ></BreadCumb> 
    <AcRepairInRitzDetail />
</div>
  )
}

export default AcRepairInRitz
