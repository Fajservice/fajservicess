import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahLakeTowersDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahLakeTowersDetail';
const AcRepairInJumeirahLakeTowers = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jumeirah Lake Towers"
    ></BreadCumb>
    <AcRepairInJumeirahLakeTowersDetail/>
</div>
  )
}

export default AcRepairInJumeirahLakeTowers
