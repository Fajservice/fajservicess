import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinUmmAlSheifDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinUmmAlSheifDetail';
const AcRepairInUmmAlSheif = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Umm Al Sheif"
    ></BreadCumb> 
    <AcRepairinUmmAlSheifDetail />
    </div>
  )
}

export default AcRepairInUmmAlSheif
