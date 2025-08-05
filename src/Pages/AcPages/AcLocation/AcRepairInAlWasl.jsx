import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlWaslDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlWaslDetail';
const AcRepairInAlWasl = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Wasl"
      ></BreadCumb>
      <AcRepairInAlWaslDetail />
    </div>
  )
}

export default AcRepairInAlWasl
