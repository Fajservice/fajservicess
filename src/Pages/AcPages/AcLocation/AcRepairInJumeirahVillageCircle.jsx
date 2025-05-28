import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahVillageCircleDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahVillageCircleDetail';
const AcRepairInJumeirahVillageCircle = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jumeirah Village Circle"
    ></BreadCumb>
    <AcRepairInJumeirahVillageCircleDetail />
</div>
  )
}

export default AcRepairInJumeirahVillageCircle
