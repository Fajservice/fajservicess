import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlRaffaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlRaffaDetail';
const AcRepairInAlRaffa = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Raffa"
    ></BreadCumb>
    <AcRepairInAlRaffaDetail />
</div>
  )
}

export default AcRepairInAlRaffa
