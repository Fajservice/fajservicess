import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInUmmSuqeimDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInUmmSuqeimDetail';
const AcRepairInUmmSuqeim = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Umm Suqeim"
    ></BreadCumb>
    <AcRepairInUmmSuqeimDetail />
</div>
  )
}

export default AcRepairInUmmSuqeim
