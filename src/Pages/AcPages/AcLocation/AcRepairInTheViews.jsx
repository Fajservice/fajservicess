import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInTheViewsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInTheViewsDetail';

const AcRepairInTheViews = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in The Views"
    ></BreadCumb>
    <AcRepairInTheViewsDetail />
</div>
  )
}

export default AcRepairInTheViews
