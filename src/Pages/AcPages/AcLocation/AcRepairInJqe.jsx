import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJqeDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJqeDetail';
const AcRepairInJqe = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in JGE"
    ></BreadCumb>
    <AcRepairInJqeDetail />
</div>
  )
}

export default AcRepairInJqe
