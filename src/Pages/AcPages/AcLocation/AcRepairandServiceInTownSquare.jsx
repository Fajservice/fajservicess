import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairandServiceInTownSquareDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairandServiceInTownSquareDetail';
const AcRepairandServiceInTownSquare = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Repair & Service in Town Square"
      ></BreadCumb>
      <AcRepairandServiceInTownSquareDetail />
    </div>
  )
}

export default AcRepairandServiceInTownSquare
