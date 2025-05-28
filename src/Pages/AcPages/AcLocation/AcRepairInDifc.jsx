import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDifcDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDifcDetail';
const AcRepairInDifc = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in DIFC"
    ></BreadCumb>
    <AcRepairInDifcDetail />
</div>
  )
}

export default AcRepairInDifc
