import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeriahVillageTriangleDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeriahVillageTriangleDetail';

const AcRepairInJumeriahVillageTriangle = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jumeirah Village Triangle"
    ></BreadCumb>
    <AcRepairInJumeriahVillageTriangleDetail/>
</div>
  )
}

export default AcRepairInJumeriahVillageTriangle
