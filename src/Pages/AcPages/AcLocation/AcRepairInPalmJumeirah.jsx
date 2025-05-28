import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInPalmJumeirahDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInPalmJumeirahDetail';
const AcRepairInPalmJumeirah = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Palm Jumeirah"
    ></BreadCumb>
    <AcRepairInPalmJumeirahDetail />
</div>
  )
}

export default AcRepairInPalmJumeirah
