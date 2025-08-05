import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInBurDubaiDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInBurDubaiDetail';
const AcRepairInBurDubai = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Bur Dubai"
      ></BreadCumb>
      <AcRepairInBurDubaiDetail />
    </div>
  )
}

export default AcRepairInBurDubai
