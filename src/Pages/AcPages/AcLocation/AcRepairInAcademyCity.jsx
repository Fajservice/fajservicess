import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAcademyCityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAcademyCityDetail';
const AcRepairInAcademyCity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Academy City"
    ></BreadCumb>
    <AcRepairInAcademyCityDetail />
</div>
  )
}

export default AcRepairInAcademyCity
