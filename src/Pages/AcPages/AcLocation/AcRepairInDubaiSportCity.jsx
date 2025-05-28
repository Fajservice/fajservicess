import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDubaiSportCityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDubaiSportCityDetail';
const AcRepairInDubaiSportCity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Dubai Sport City"
    ></BreadCumb>
    <AcRepairInDubaiSportCityDetail />
</div>
  )
}

export default AcRepairInDubaiSportCity
