import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinTheGreensDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinTheGreensDetail';
const AcRepairinTheGreens = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in The Greens"
    ></BreadCumb>
    <AcRepairinTheGreensDetail />
</div>
  )
}

export default AcRepairinTheGreens
