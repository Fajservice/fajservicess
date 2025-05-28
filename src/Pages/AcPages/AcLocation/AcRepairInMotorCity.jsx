import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInMotorCityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInMotorCityDetail';
const AcRepairInMotorCity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Motor City"
    ></BreadCumb>
    <AcRepairInMotorCityDetail />
</div>
  )
}

export default AcRepairInMotorCity
