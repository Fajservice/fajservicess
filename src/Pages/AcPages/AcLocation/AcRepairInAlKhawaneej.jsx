import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlKhawaneejDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlKhawaneejDetail';
const AcRepairInAlKhawaneej = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Khawaneej"
    ></BreadCumb>
    <AcRepairInAlKhawaneejDetail />
</div>
  )
}

export default AcRepairInAlKhawaneej
