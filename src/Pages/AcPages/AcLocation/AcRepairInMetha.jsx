import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInMethaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInMethaDetail';
const AcRepairInMetha = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Oud Metha"
    ></BreadCumb> 
    <AcRepairInMethaDetail />
</div>
  )
}

export default AcRepairInMetha
