import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinAlJafiliyaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinAlJafiliyaDetail';
const AcRepairinAlJafiliya = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Jafiliya"
      ></BreadCumb>
      <AcRepairinAlJafiliyaDetail />
    </div>
  )
}

export default AcRepairinAlJafiliya
