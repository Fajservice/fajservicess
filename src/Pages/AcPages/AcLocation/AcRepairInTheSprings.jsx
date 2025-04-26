import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInTheSpringsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInTheSpringsDetail';
const AcRepairInTheSprings = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in The Springs Detail"
    ></BreadCumb>
    <AcRepairInTheSpringsDetail />
</div>
  )
}

export default AcRepairInTheSprings
