import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlJafzaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlJafzaDetail';
const AcRepairInAlJafza = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jafza"
    ></BreadCumb>
    <AcRepairInAlJafzaDetail />
</div>
  )
}

export default AcRepairInAlJafza
