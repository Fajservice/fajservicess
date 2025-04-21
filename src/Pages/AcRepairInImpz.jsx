import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInImpzDetail from '../Components/ServiceDetails/AcRepairInImpzDetail';
const AcRepairInImpz = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Impz"
    ></BreadCumb>
    <AcRepairInImpzDetail />
</div>
  )
}

export default AcRepairInImpz
