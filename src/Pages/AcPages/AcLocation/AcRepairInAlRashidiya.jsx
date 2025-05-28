import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlRashidiyaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlRashidiyaDetail';
const AcRepairInAlRashidiya = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Rashidiya"
    ></BreadCumb>
    <AcRepairInAlRashidiyaDetail />
</div>
  )
}

export default AcRepairInAlRashidiya
