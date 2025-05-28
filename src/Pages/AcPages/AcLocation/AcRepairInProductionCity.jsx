import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInProductionCityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInProductionCityDetail';
const AcRepairInProductionCity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Repair & Service in Dubai Production City"
    ></BreadCumb>
    <AcRepairInProductionCityDetail />
</div>
  )
}

export default AcRepairInProductionCity
