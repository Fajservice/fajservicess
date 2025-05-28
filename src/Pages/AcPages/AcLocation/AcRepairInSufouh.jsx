import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInSufouhDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInSufouhDetail';
const AcRepairInSufouh = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Sufouh"
    ></BreadCumb>
    <AcRepairInSufouhDetail />
</div>
  )
}

export default AcRepairInSufouh
