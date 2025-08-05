import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInArabianRanchesDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInArabianRanchesDetail';
const AcRepairInArabianRanches = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Arabian Ranches"
      ></BreadCumb>
      <AcRepairInArabianRanchesDetail />
    </div>
  )
}

export default AcRepairInArabianRanches
