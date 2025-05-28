import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahVillageDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahVillageDetail';

const AcRepairInJumeirahVillage = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jumeirah Village Dubai"
      ></BreadCumb>
      <AcRepairInJumeirahVillageDetail />

    </div>
  )
}

export default AcRepairInJumeirahVillage
