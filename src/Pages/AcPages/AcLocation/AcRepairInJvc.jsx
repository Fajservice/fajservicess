import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJvcDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJvcDetail';
const AcRepairInJvc = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jvc"
    ></BreadCumb>
    <AcRepairInJvcDetail />
</div>
  )
}

export default AcRepairInJvc
