import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInHudaibaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInHudaibaDetail';
const AcRepairInHudaiba = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Hudaiba"
    ></BreadCumb>
    <AcRepairInHudaibaDetail />
</div>
  )
}

export default AcRepairInHudaiba
