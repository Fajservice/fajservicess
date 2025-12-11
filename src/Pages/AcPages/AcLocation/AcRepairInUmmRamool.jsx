import React from 'react';
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInUmmRamoolDetail from "../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInUmmRamoolDetail.jsx";
const AcRepairInUmmRamool = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Umm Ramool"
    ></BreadCumb>
    <AcRepairInUmmRamoolDetail />
</div>
  )
}

export default AcRepairInUmmRamool
