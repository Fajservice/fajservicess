import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlManaraDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlManaraDetail';
const AcRepairInAlManara = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Manara"
    ></BreadCumb>
    <AcRepairInAlManaraDetail />
</div>
  )
}

export default AcRepairInAlManara
