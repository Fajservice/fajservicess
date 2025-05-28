import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJLTdETAIL from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJLTdETAIL.JSX';
const AcRepairInJLT = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
                Title="AC Service in JLT"
            ></BreadCumb>
            <AcRepairInJLTdETAIL />

        </div>
  )
}

export default AcRepairInJLT
