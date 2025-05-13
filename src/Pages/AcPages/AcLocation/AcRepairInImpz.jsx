import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInImpzDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInImpzDetail';
const AcRepairInImpz = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.jpg"
        Title="AC Service in Impz"
    ></BreadCumb>
    <AcRepairInImpzDetail />
</div>
  )
}

export default AcRepairInImpz
