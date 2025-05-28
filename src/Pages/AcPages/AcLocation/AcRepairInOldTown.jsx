import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInOldTownDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInOldTownDetail';
const AcRepairInOldTown = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Old Town Dubai"
    ></BreadCumb>
    <AcRepairInOldTownDetail />
</div>
  )
}

export default AcRepairInOldTown
