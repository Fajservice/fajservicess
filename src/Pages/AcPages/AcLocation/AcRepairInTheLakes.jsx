import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInTheLakesDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInTheLakesDetail';

const AcRepairInTheLakes = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in The Lakes"
    ></BreadCumb>
    <AcRepairInTheLakesDetail />
</div>
  )
}

export default AcRepairInTheLakes
