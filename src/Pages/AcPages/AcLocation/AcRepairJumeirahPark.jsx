import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahParkDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahParkDetail';
const AcRepairInJumeirahPark = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jumeirah Park"
    ></BreadCumb>
    <AcRepairInJumeirahParkDetail />
</div>
  )
}

export default AcRepairInJumeirahPark
