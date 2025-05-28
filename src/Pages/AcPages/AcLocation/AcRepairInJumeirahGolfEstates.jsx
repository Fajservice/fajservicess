import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahGolfEstatesDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahGolfEstatesDetail';
const AcRepairInJumeirahGolfEstates = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jumeirah Golf Estates"
    ></BreadCumb>
    <AcRepairInJumeirahGolfEstatesDetail/>
</div>
  )
}

export default AcRepairInJumeirahGolfEstates
