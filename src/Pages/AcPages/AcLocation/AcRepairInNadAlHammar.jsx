import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInNadAlHammarDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInNadAlHammarDetail';
const AcRepairInNadAlHammar = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Nad Al Hammar"
    ></BreadCumb>
    <AcRepairInNadAlHammarDetail />
</div>
  )
}

export default AcRepairInNadAlHammar
