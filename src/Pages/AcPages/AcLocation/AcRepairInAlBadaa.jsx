import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBadaaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlBadaaDetail';
const AcRepairInAlBadaa = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Badaa"
    ></BreadCumb>
    <AcRepairInAlBadaaDetail/>
</div>
  )
}

export default AcRepairInAlBadaa
