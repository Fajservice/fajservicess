import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlTawarDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlTawarDetail';
const AcRepairinAlTawar = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Tawar"
    ></BreadCumb>
    <AcRepairInAlTawarDetail />
</div>
  )
}

export default AcRepairinAlTawar
