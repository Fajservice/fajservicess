import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBarshaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlBarshaDetail';
const AcRepairInAlBarsha = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Barsha"
      ></BreadCumb>
      <AcRepairInAlBarshaDetail />
    </div>
  )
}

export default AcRepairInAlBarsha
