import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlQuozDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlQuozDetail';
const AcRepairInAlQuoz = () => {
  return (
    <div className="serviceDetailS">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Quoz"
    ></BreadCumb>
    <AcRepairInAlQuozDetail />
</div>
  )
}

export default AcRepairInAlQuoz
