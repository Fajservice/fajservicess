import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInNadAlShebaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInNadAlShebaDetail';

const AcRepairInNadAlSheba = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Nad Al Sheba"
    ></BreadCumb>
    <AcRepairInNadAlShebaDetail />
</div>
  )
}

export default AcRepairInNadAlSheba
