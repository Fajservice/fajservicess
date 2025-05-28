import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDipDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDipDetail';
const AcRepairInDip = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in DIP"
    ></BreadCumb>
    <AcRepairInDipDetail />
</div>
  )
}

export default AcRepairInDip
