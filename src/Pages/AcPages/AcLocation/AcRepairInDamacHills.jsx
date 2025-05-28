import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDamacHillsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDamacHillsDetail';
const AcRepairInDamacHills = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Repair & Service in Damac Hills"
    ></BreadCumb>
    <AcRepairInDamacHillsDetail />
</div>
  )
}

export default AcRepairInDamacHills
