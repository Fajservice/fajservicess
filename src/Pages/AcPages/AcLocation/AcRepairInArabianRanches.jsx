import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInArabianRanchesDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInArabianRanchesDetail';
const AcRepairInArabianRanches = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.avif"
        Title="AC Service in Arabian Ranches"
    ></BreadCumb>
    <AcRepairInArabianRanchesDetail />
</div>
  )
}

export default AcRepairInArabianRanches
