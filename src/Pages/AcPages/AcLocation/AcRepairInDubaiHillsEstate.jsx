import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDubaiHillsEstateDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDubaiHillsEstateDetail';
const AcRepairInDubaiHillsEstate = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Damac Hill"
    ></BreadCumb>
    <AcRepairInDubaiHillsEstateDetail />
</div>
  )
}

export default AcRepairInDubaiHillsEstate
