import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlFurjanDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlFurjanDetail';

const AcRepairInAlFurjan = () => {
  return (
<div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Furjan"
    ></BreadCumb>
    <AcRepairInAlFurjanDetail />
</div>
  )
}

export default AcRepairInAlFurjan
