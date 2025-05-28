import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBarariDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlBarariDetail';
const AcRepairInAlBarari = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Barari"
    ></BreadCumb>
    <AcRepairInAlBarariDetail />
</div>
  )
}

export default AcRepairInAlBarari
