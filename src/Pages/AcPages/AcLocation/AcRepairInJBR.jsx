import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJBRDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJBRDetail';
const AcRepairInJBR = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in JBR"
    ></BreadCumb>
    <AcRepairInJBRDetail/>
</div>
  )
}

export default AcRepairInJBR
